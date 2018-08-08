////////////////////////////////////////////////////////////////////////////
// Porgram: game24.go
// Purpose: Play the 24 game (http://rosettacode.org/wiki/24_game)
// Authors: Tong Sun (c) 2016, All rights reserved
// Credits: http://rosettacode.org/wiki/24_game/Solve#Go
////////////////////////////////////////////////////////////////////////////

package main

import (
	"fmt"

	game24 "github.com/suntong/game24/str"
)

////////////////////////////////////////////////////////////////////////////
// Global variables definitions

func main() {
	r := game24.Play(30)
	fmt.Println(r)
}