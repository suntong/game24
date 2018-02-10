////////////////////////////////////////////////////////////////////////////
// Porgram: game24.go
// Purpose: package for playing the 24 game
// Authors: Tong Sun (c) 2016-2018, All rights reserved
////////////////////////////////////////////////////////////////////////////

package game24

import (
	"fmt"
	"math/rand"
)

// Play is for playing the game
func Play() {
	cards := make([]*Expr, nCards)
	// rand.Seed(time.Now().Unix())

	for k := 0; k < 30; k++ {
		fmt.Println()
		for i := 0; i < nCards; i++ {
			cards[i] = NewExpr(rand.Intn(digitRange) + 1)
			fmt.Printf(" %d", cards[i].Value())
			if i == 1 {
				fmt.Print("\n")
			}
		}
		fmt.Println()
		fmt.Print(Resolve(cards))
	}
}
