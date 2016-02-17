////////////////////////////////////////////////////////////////////////////
// Porgram: game24.go
// Purpose: Play the 24 game (http://rosettacode.org/wiki/24_game)
// Authors: Tong Sun (c) 2016, All rights reserved
// Credits: http://rosettacode.org/wiki/24_game/Solve#Go
////////////////////////////////////////////////////////////////////////////

package main

import (
	"fmt"
	"math/rand"
	"time"
)

import "github.com/suntong/game24"

////////////////////////////////////////////////////////////////////////////
// Global variables definitions

const n_cards = 4
const digit_range = 9

// Play is for playing the game
func Play() {
	cards := make([]*game24.Expr, n_cards)
	rand.Seed(time.Now().Unix())

	for k := 0; k < 10; k++ {
		for i := 0; i < n_cards; i++ {
			cards[i] = game24.NewExpr(rand.Intn(digit_range-1) + 1)
			fmt.Printf(" %d", cards[i].Value())
			if i == 1 {
				fmt.Print("\n")
			}
		}
		fmt.Print(":\n  ")
		if !game24.Solve(cards) {
			fmt.Println("No solution")
		}
	}
}

func main() {
	Play()
}
