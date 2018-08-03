$load["github.com/suntong/game24/str/game24"] = function () {
$packages["github.com/suntong/game24/str/game24"] = (function() {
	var $pkg = {}, $init, fmt, game24, sliceType, main;
	fmt = $packages["fmt"];
	game24 = $packages["github.com/suntong/game24/str"];
	sliceType = $sliceType($emptyInterface);
	main = function() {
		var _r, _r$1, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_r = game24.Play(30); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		r = _r;
		_r$1 = fmt.Println(new sliceType([new $String(r)])); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$1;
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: main }; } $f._r = _r; $f._r$1 = _r$1; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	$init = function() {
		$pkg.$init = function() {};
		/* */ var $f, $c = false, $s = 0, $r; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		$r = fmt.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = game24.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		/* */ if ($pkg === $mainPkg) { $s = 3; continue; }
		/* */ $s = 4; continue;
		/* if ($pkg === $mainPkg) { */ case 3:
			$r = main(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
			$mainFinished = true;
		/* } */ case 4:
		/* */ } return; } if ($f === undefined) { $f = { $blk: $init }; } $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.$init = $init;
	return $pkg;
})();
};