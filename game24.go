////////////////////////////////////////////////////////////////////////////
// Porgram: game24.go
// Purpose: package for playing the 24 game
// Authors: Tong Sun (c) 2016, All rights reserved
// Credits: http://rosettacode.org/wiki/24_game/Solve#Go
////////////////////////////////////////////////////////////////////////////

/*
package game24 provides fast solution to the 24 game (http://rosettacode.org/wiki/24_game).

In brief, the 24 game is a card game that, with a given four cards (numbers, each from 1 to 9), create an expression using any elementary operators (+, -, *, /), containing only these numbers, exactly once each, such that the result is 24.
*/
package game24

import (
	"fmt"
)

////////////////////////////////////////////////////////////////////////////
// Constant and data type/structure definitions

const calc_range = 99

const (
	op_num = iota
	op_add
	op_sub
	op_mul
	op_div
)

// Expr is for Expression: it can either be a single number, or a result of
// binary operation from left and right node
type Expr struct {
	op          int
	left, right *Expr
	value       int
}

////////////////////////////////////////////////////////////////////////////
// Global variables definitions

var n_cards = 4
var goal = 24

var calc [op_div + 1][calc_range + 1][calc_range + 1]int

////////////////////////////////////////////////////////////////////////////
// Function definitions

func init() {
	for op := op_add; op <= op_div; op++ {
		for i := 0; i <= calc_range; i++ {
			for j := 0; j <= calc_range; j++ {
				switch {
				case op == op_add:
					calc[op][i][j] = i + j
				case op == op_sub:
					calc[op][i][j] = i - j
				case op == op_mul:
					calc[op][i][j] = i * j
				case op == op_div:
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
	return &Expr{op: op_num, value: value}
}

// Value returns the value store in the given Expr structure.
func (x *Expr) Value() int {
	return x.value
}

// String will convert the expression tree into infix expression string.
func (x *Expr) String() string {
	if x.op == op_num {
		return fmt.Sprintf("%d", x.value)
	}

	var bl1, br1, bl2, br2, opstr string
	switch {
	case x.left.op == op_num:
	case x.left.op >= x.op:
	case x.left.op == op_add && x.op == op_sub:
		bl1, br1 = "", ""
	default:
		bl1, br1 = "(", ")"
	}

	if x.right.op == op_num || x.op < x.right.op {
		bl2, br2 = "", ""
	} else {
		bl2, br2 = "(", ")"
	}

	switch {
	case x.op == op_add:
		opstr = " + "
	case x.op == op_sub:
		opstr = " - "
	case x.op == op_mul:
		opstr = " * "
	case x.op == op_div:
		opstr = " / "
	}

	return bl1 + x.left.String() + br1 + opstr +
		bl2 + x.right.String() + br2
}

func expr_eval(x *Expr) (ret int) {
	if x.op == op_num {
		return x.value
	}

	l, r := expr_eval(x.left), expr_eval(x.right)
	// all negative results are considered invalid
	// all values over calc_range are way too big to reach the valid solution
	if l < 0 || r < 0 || l > calc_range || r > calc_range {
		return -1
	}

	return calc[x.op][l][r]
}

// Solve is key function to solve the 24 game
func Solve(ex_in []*Expr) bool {
	// only one expression left, meaning all numbers are arranged into
	// a binary tree, so evaluate and see if we get 24
	if len(ex_in) == 1 {
		if expr_eval(ex_in[0]) == goal {
			fmt.Println(ex_in[0].String())
			return true
		}
		return false
	}

	var node Expr
	ex := make([]*Expr, len(ex_in)-1)

	// try to combine a pair of expressions into one, thus reduce
	// the list length by 1, and recurse down
	for i := range ex {
		copy(ex[i:len(ex)], ex_in[i+1:len(ex_in)])

		ex[i] = &node
		for j := i + 1; j < len(ex_in); j++ {
			node.left = ex_in[i]
			node.right = ex_in[j]

			// try all 4 operators
			for o := op_add; o <= op_div; o++ {
				node.op = o
				if Solve(ex) {
					return true
				}
			}

			// also - and / are not commutative, so swap arguments
			node.left = ex_in[j]
			node.right = ex_in[i]

			node.op = op_sub
			if Solve(ex) {
				return true
			}

			node.op = op_div
			if Solve(ex) {
				return true
			}

			if j < len(ex) {
				ex[j] = ex_in[j]
			}
		}
		ex[i] = ex_in[i]
	}
	return false
}
