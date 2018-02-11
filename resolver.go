////////////////////////////////////////////////////////////////////////////
// Porgram: game24.go
// Purpose: package for playing the 24 game
// Authors: Tong Sun (c) 2016-2018, All rights reserved
// Credits: http://rosettacode.org/wiki/24_game/Solve#Go
////////////////////////////////////////////////////////////////////////////

package game24

import "strconv"

////////////////////////////////////////////////////////////////////////////
// Constant and data type/structure definitions

const (
	nCards     = 4
	digitRange = 9
	goal       = 24
	calcRange  = 99
)

const (
	opNum = iota
	opAdd
	opSub
	opMul
	opDiv
)

const NoSolution = "- XX\n"

// Expr is for Expression: it can either be a single number, or a result of
// binary operation from left and right node
type Expr struct {
	op          int
	left, right *Expr
	value       int
}

////////////////////////////////////////////////////////////////////////////
// Global variables definitions

var calc [opDiv + 1][calcRange + 1][calcRange + 1]int

////////////////////////////////////////////////////////////////////////////
// Function definitions

func CalcInit() {
	for op := opAdd; op <= opDiv; op++ {
		for i := 0; i <= calcRange; i++ {
			for j := 0; j <= calcRange; j++ {
				switch {
				case op == opAdd:
					calc[op][i][j] = i + j
				case op == opSub:
					calc[op][i][j] = i - j
				case op == opMul:
					calc[op][i][j] = i * j
				case op == opDiv:
					if j == 0 || i%j != 0 {
						calc[op][i][j] = -1
					} else {
						calc[op][i][j] = i / j
					}
				}
			}
		}
	}
}

// NewExpr is the factory function for initialization.
func NewExpr(value int) *Expr {
	return &Expr{op: opNum, value: value}
}

// Value returns the value store in the given Expr structure.
func (x *Expr) Value() int {
	return x.value
}

// String will convert the expression tree into infix expression string.
func (x *Expr) String() string {
	if x.op == opNum {
		return strconv.Itoa(x.value)
	}

	var bl1, br1, bl2, br2, opstr string
	switch {
	case x.left.op == opNum:
	case x.left.op >= x.op:
	case x.left.op == opAdd && x.op == opSub:
		bl1, br1 = "", ""
	default:
		bl1, br1 = "(", ")"
	}

	if x.right.op == opNum || x.op < x.right.op {
		bl2, br2 = "", ""
	} else {
		bl2, br2 = "(", ")"
	}

	switch {
	case x.op == opAdd:
		opstr = " + "
	case x.op == opSub:
		opstr = " - "
	case x.op == opMul:
		opstr = " * "
	case x.op == opDiv:
		opstr = " / "
	}

	return bl1 + x.left.String() + br1 + opstr +
		bl2 + x.right.String() + br2
}

func exprEval(x *Expr) (ret int) {
	if x.op == opNum {
		return x.value
	}

	l, r := exprEval(x.left), exprEval(x.right)
	// all negative results are considered invalid
	// all values over calcRange are way too big to reach the valid solution
	if l < 0 || r < 0 || l > calcRange || r > calcRange {
		return -1
	}

	return calc[x.op][l][r]
}

func Resolve(exIn []*Expr) string {
	r, _ := Solve(exIn)
	return r
}

// Solve is key function to solve the 24 game
func Solve(exIn []*Expr) (string, bool) {
	// only one expression left, meaning all numbers are arranged into
	// a binary tree, so evaluate and see if we get 24
	if len(exIn) == 1 {
		if exprEval(exIn[0]) == goal {
			return "- !!\n: " + exIn[0].String() + "\n", true
		}
		return NoSolution, false
	}

	var node Expr
	ex := make([]*Expr, len(exIn)-1)

	// try to combine a pair of expressions into one, thus reduce
	// the list length by 1, and recurse down
	for i := range ex {
		copy(ex[i:], exIn[i+1:])

		ex[i] = &node
		for j := i + 1; j < len(exIn); j++ {
			node.left = exIn[i]
			node.right = exIn[j]

			// try all 4 operators
			for o := opAdd; o <= opDiv; o++ {
				node.op = o
				if r, OK := Solve(ex); OK {
					return r, true
				}
			}

			// also - and / are not commutative, so swap arguments
			node.left = exIn[j]
			node.right = exIn[i]

			node.op = opSub
			if r, OK := Solve(ex); OK {
				return r, true
			}

			node.op = opDiv
			if r, OK := Solve(ex); OK {
				return r, true
			}

			if j < len(ex) {
				ex[j] = exIn[j]
			}
		}
		ex[i] = exIn[i]
	}
	return NoSolution, false
}
