////////////////////////////////////////////////////////////////////////////
// Porgram: game24.go
// Purpose: Play the 24 game (http://rosettacode.org/wiki/24_game)
// Authors: Tong Sun (c) 2016~17, All rights reserved
////////////////////////////////////////////////////////////////////////////

package main

import (
	"github.com/mkideal/cli"
	g24 "github.com/suntong/game24"
)

//==========================================================================
// Main dispatcher

func game24(ctx *cli.Context) error {
	rootArgv = ctx.RootArgv().(*rootT)

	g := g24.NewGame(rootArgv.GameC, rootArgv.FileO)
	g.Play()
	return nil
}
