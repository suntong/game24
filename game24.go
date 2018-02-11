////////////////////////////////////////////////////////////////////////////
// Porgram: game24.go
// Purpose: package for playing the 24 game
// Authors: Tong Sun (c) 2016, All rights reserved
// Credits: http://rosettacode.org/wiki/24_game/Solve#Go
////////////////////////////////////////////////////////////////////////////

/*
Package game24 provides fast solution to the 24 game (http://rosettacode.org/wiki/24_game).

In brief, the 24 game is a card game that, with a given four cards (numbers, each from 1 to 9), create an expression using any elementary operators (+, -, *, /), containing only these numbers, exactly once each, such that the result is 24.
*/
package game24

import (
	"fmt"
	"io"
	"math/rand"
	"time"
)

////////////////////////////////////////////////////////////////////////////
// Constant and data type/structure definitions

// Game controls the 24 game and solution generator
type Game struct {
	GameC   int
	FileO   io.Writer
	Verbose int
}

////////////////////////////////////////////////////////////////////////////
// Global variables definitions

////////////////////////////////////////////////////////////////////////////
// Function definitions

// NewGame is the factory function for Game initialization.
func NewGame(n int, o io.Writer) *Game {
	CalcInit()
	return &Game{GameC: n, FileO: o}
}

// Solve is key function to solve the 24 game
func (g *Game) Solve(exIn []*Expr) {
	fmt.Fprint(g.FileO, Resolve(exIn))
}

// Play is for playing the game
func (g *Game) Play() {
	cards := make([]*Expr, nCards)
	rand.Seed(time.Now().Unix())

	for k := 0; k < g.GameC; k++ {
		fmt.Fprintln(g.FileO)
		for i := 0; i < nCards; i++ {
			cards[i] = NewExpr(rand.Intn(digitRange) + 1)
			fmt.Fprintf(g.FileO, " %d", cards[i].Value())
			if i == 1 {
				fmt.Fprint(g.FileO, "\n")
			}
		}
		fmt.Fprintln(g.FileO)
		g.Solve(cards)
	}
}
