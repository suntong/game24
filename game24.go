/*
package game24 provides go solution to the 24 game
*/

////////////////////////////////////////////////////////////////////////////
// Porgram: game24.go
// Purpose: Play the 24 game (http://rosettacode.org/wiki/24_game)
// Authors: Tong Sun (c) 2016, All rights reserved
// Credits: http://rosettacode.org/wiki/24_game/Solve#Go
////////////////////////////////////////////////////////////////////////////

package game24

import (
	"fmt"
)

////////////////////////////////////////////////////////////////////////////
// Constant and data type/structure definitions

const (
	Op_num = iota
	Op_add
	Op_sub
	Op_mul
	Op_div
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

////////////////////////////////////////////////////////////////////////////
// Function definitions

// NewExpr is the factory function for initialization.
func NewExpr(op int, left, right *Expr, value int) *Expr {
	return &Expr{op, left, right, value}
}

// Value returns the value store in the given Expr structure.
func (x *Expr) Value() int {
	return x.value
}

// String will convert the expression tree into infix expression string.
func (x *Expr) String() string {
	if x.op == Op_num {
		return fmt.Sprintf("%d", x.value)
	}

	var bl1, br1, bl2, br2, opstr string
	switch {
	case x.left.op == Op_num:
	case x.left.op >= x.op:
	case x.left.op == Op_add && x.op == Op_sub:
		bl1, br1 = "", ""
	default:
		bl1, br1 = "(", ")"
	}

	if x.right.op == Op_num || x.op < x.right.op {
		bl2, br2 = "", ""
	} else {
		bl2, br2 = "(", ")"
	}

	switch {
	case x.op == Op_add:
		opstr = " + "
	case x.op == Op_sub:
		opstr = " - "
	case x.op == Op_mul:
		opstr = " * "
	case x.op == Op_div:
		opstr = " / "
	}

	return bl1 + x.left.String() + br1 + opstr +
		bl2 + x.right.String() + br2
}

func expr_eval(x *Expr) (ret int, ok bool) {
	if x.op == Op_num {
		return x.value, true
	}

	l, lok := expr_eval(x.left)
	r, rok := expr_eval(x.right)
	if !(lok && rok) {
		return 0, false
	}

	switch x.op {
	case Op_add:
		return l + r, true

	case Op_sub:
		return l - r, true

	case Op_mul:
		return l * r, true

	case Op_div:
		if r == 0 || l%r != 0 {
			return 0, false
		}
		return l / r, true
	}
	return 0, false
}

// Solve is key function to solve the 24 game
func Solve(ex_in []*Expr) bool {
	// only one expression left, meaning all numbers are arranged into
	// a binary tree, so evaluate and see if we get 24
	if len(ex_in) == 1 {
		r, ok := expr_eval(ex_in[0])
		if ok && r == goal {
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
			for o := Op_add; o <= Op_div; o++ {
				node.op = o
				if Solve(ex) {
					return true
				}
			}

			// also - and / are not commutative, so swap arguments
			node.left = ex_in[j]
			node.right = ex_in[i]

			node.op = Op_sub
			if Solve(ex) {
				return true
			}

			node.op = Op_div
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
