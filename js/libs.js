$load["github.com/suntong/game24/str/libs"] = function () {
$packages["github.com/suntong/game24/str/libs"] = (function() {
	var $pkg = {}, $init, rand, strconv, time, Int2Str, RandI, RandN;
	rand = $packages["math/rand"];
	strconv = $packages["strconv"];
	time = $packages["time"];
	Int2Str = function(i) {
		var i;
		return strconv.Itoa(i);
	};
	$pkg.Int2Str = Int2Str;
	RandI = function() {
		var $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		$r = rand.Seed($clone(time.Now(), time.Time).Unix()); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: RandI }; } $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.RandI = RandI;
	RandN = function(i) {
		var _r, i, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; i = $f.i; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_r = rand.Intn(i); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: RandN }; } $f._r = _r; $f.i = i; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.RandN = RandN;
	$init = function() {
		$pkg.$init = function() {};
		/* */ var $f, $c = false, $s = 0, $r; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		$r = rand.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = strconv.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = time.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		/* */ } return; } if ($f === undefined) { $f = { $blk: $init }; } $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.$init = $init;
	return $pkg;
})();
};