////////////////////////////////////////////////////////////////////////////
// Porgram: game24.go
// Purpose: Play the 24 game (http://rosettacode.org/wiki/24_game)
// Authors: Tong Sun (c) 2016, All rights reserved
// Credits: http://rosettacode.org/wiki/24_game/Solve#Go
////////////////////////////////////////////////////////////////////////////

package main

import (
	"github.com/suntong/game24"
)

////////////////////////////////////////////////////////////////////////////
// Global variables definitions

const nCards = 4
const digitRange = 9

var rand int

func main() {
	game24.CalcInit()
	Play()
}

// Play is for playing the game
func Play() {
	cards := make([]*game24.Expr, nCards)
	// rand.Seed(time.Now().Unix())

	for k := 0; k < 30; k++ {
		println()
		for i := 0; i < nCards; i++ {
			cards[i] = game24.NewExpr(rand + 1)
			print(cards[i].Value())
			if i == 1 {
				println()
			}
		}
		println()
		print(game24.Resolve(cards))
	}
}
