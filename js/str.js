$load["github.com/suntong/game24/str"] = function () {
$packages["github.com/suntong/game24/str"] = (function() {
	var $pkg = {}, $init, libs, Expr, ptrType, sliceType, NewExpr, expr_eval, Solve, Play;
	libs = $packages["github.com/suntong/game24/str/libs"];
	Expr = $pkg.Expr = $newType(0, $kindStruct, "game24.Expr", true, "github.com/suntong/game24/str", true, function(op_, left_, right_, value_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.op = 0;
			this.left = ptrType.nil;
			this.right = ptrType.nil;
			this.value = 0;
			return;
		}
		this.op = op_;
		this.left = left_;
		this.right = right_;
		this.value = value_;
	});
	ptrType = $ptrType(Expr);
	sliceType = $sliceType(ptrType);
	NewExpr = function(op, left, right, value) {
		var left, op, right, value;
		return new Expr.ptr(op, left, right, value);
	};
	$pkg.NewExpr = NewExpr;
	Expr.ptr.prototype.Value = function() {
		var x;
		x = this;
		return x.value;
	};
	Expr.prototype.Value = function() { return this.$val.Value(); };
	Expr.ptr.prototype.String = function() {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, bl1, bl2, br1, br2, opstr, x;
		x = this;
		if (x.op === 0) {
			return libs.Int2Str(x.value);
		}
		_tmp = "";
		_tmp$1 = "";
		_tmp$2 = "";
		_tmp$3 = "";
		_tmp$4 = "";
		bl1 = _tmp;
		br1 = _tmp$1;
		bl2 = _tmp$2;
		br2 = _tmp$3;
		opstr = _tmp$4;
		if ((x.left.op === 0)) {
		} else if (x.left.op >= x.op) {
		} else if ((x.left.op === 1) && (x.op === 2)) {
			_tmp$5 = "";
			_tmp$6 = "";
			bl1 = _tmp$5;
			br1 = _tmp$6;
		} else {
			_tmp$7 = "(";
			_tmp$8 = ")";
			bl1 = _tmp$7;
			br1 = _tmp$8;
		}
		if ((x.right.op === 0) || x.op < x.right.op) {
			_tmp$9 = "";
			_tmp$10 = "";
			bl2 = _tmp$9;
			br2 = _tmp$10;
		} else {
			_tmp$11 = "(";
			_tmp$12 = ")";
			bl2 = _tmp$11;
			br2 = _tmp$12;
		}
		if ((x.op === 1)) {
			opstr = " + ";
		} else if ((x.op === 2)) {
			opstr = " - ";
		} else if ((x.op === 3)) {
			opstr = " * ";
		} else if ((x.op === 4)) {
			opstr = " / ";
		}
		return bl1 + x.left.String() + br1 + opstr + bl2 + x.right.String() + br2;
	};
	Expr.prototype.String = function() { return this.$val.String(); };
	expr_eval = function(x) {
		var _1, _q, _r, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, l, lok, ok, r, ret, rok, x;
		ret = 0;
		ok = false;
		if (x.op === 0) {
			_tmp = x.value;
			_tmp$1 = true;
			ret = _tmp;
			ok = _tmp$1;
			return [ret, ok];
		}
		_tuple = expr_eval(x.left);
		l = _tuple[0];
		lok = _tuple[1];
		_tuple$1 = expr_eval(x.right);
		r = _tuple$1[0];
		rok = _tuple$1[1];
		if (!(lok && rok)) {
			_tmp$2 = 0;
			_tmp$3 = false;
			ret = _tmp$2;
			ok = _tmp$3;
			return [ret, ok];
		}
		_1 = x.op;
		if (_1 === (1)) {
			_tmp$4 = l + r >> 0;
			_tmp$5 = true;
			ret = _tmp$4;
			ok = _tmp$5;
			return [ret, ok];
		} else if (_1 === (2)) {
			_tmp$6 = l - r >> 0;
			_tmp$7 = true;
			ret = _tmp$6;
			ok = _tmp$7;
			return [ret, ok];
		} else if (_1 === (3)) {
			_tmp$8 = $imul(l, r);
			_tmp$9 = true;
			ret = _tmp$8;
			ok = _tmp$9;
			return [ret, ok];
		} else if (_1 === (4)) {
			if ((r === 0) || !(((_r = l % r, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) === 0))) {
				_tmp$10 = 0;
				_tmp$11 = false;
				ret = _tmp$10;
				ok = _tmp$11;
				return [ret, ok];
			}
			_tmp$12 = (_q = l / r, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
			_tmp$13 = true;
			ret = _tmp$12;
			ok = _tmp$13;
			return [ret, ok];
		}
		_tmp$14 = 0;
		_tmp$15 = false;
		ret = _tmp$14;
		ok = _tmp$15;
		return [ret, ok];
	};
	Solve = function(ex_in) {
		var _i, _ref, _tuple, _tuple$1, _tuple$2, _tuple$3, ex, ex_in, i, j, node, o, ok, ok$1, ok$2, ok$3, r, s, s$1, s$2;
		if (ex_in.$length === 1) {
			_tuple = expr_eval((0 >= ex_in.$length ? ($throwRuntimeError("index out of range"), undefined) : ex_in.$array[ex_in.$offset + 0]));
			r = _tuple[0];
			ok = _tuple[1];
			if (ok && (r === 24)) {
				return [(0 >= ex_in.$length ? ($throwRuntimeError("index out of range"), undefined) : ex_in.$array[ex_in.$offset + 0]).String() + "\n", true];
			}
			return ["", false];
		}
		node = new Expr.ptr(0, ptrType.nil, ptrType.nil, 0);
		ex = $makeSlice(sliceType, (ex_in.$length - 1 >> 0));
		_ref = ex;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			$copySlice($subslice(ex, i, ex.$length), $subslice(ex_in, (i + 1 >> 0), ex_in.$length));
			((i < 0 || i >= ex.$length) ? ($throwRuntimeError("index out of range"), undefined) : ex.$array[ex.$offset + i] = node);
			j = i + 1 >> 0;
			while (true) {
				if (!(j < ex_in.$length)) { break; }
				node.left = ((i < 0 || i >= ex_in.$length) ? ($throwRuntimeError("index out of range"), undefined) : ex_in.$array[ex_in.$offset + i]);
				node.right = ((j < 0 || j >= ex_in.$length) ? ($throwRuntimeError("index out of range"), undefined) : ex_in.$array[ex_in.$offset + j]);
				o = 1;
				while (true) {
					if (!(o <= 4)) { break; }
					node.op = o;
					_tuple$1 = Solve(ex);
					s = _tuple$1[0];
					ok$1 = _tuple$1[1];
					if (ok$1) {
						return [s, true];
					}
					o = o + (1) >> 0;
				}
				node.left = ((j < 0 || j >= ex_in.$length) ? ($throwRuntimeError("index out of range"), undefined) : ex_in.$array[ex_in.$offset + j]);
				node.right = ((i < 0 || i >= ex_in.$length) ? ($throwRuntimeError("index out of range"), undefined) : ex_in.$array[ex_in.$offset + i]);
				node.op = 2;
				_tuple$2 = Solve(ex);
				s$1 = _tuple$2[0];
				ok$2 = _tuple$2[1];
				if (ok$2) {
					return [s$1, true];
				}
				node.op = 4;
				_tuple$3 = Solve(ex);
				s$2 = _tuple$3[0];
				ok$3 = _tuple$3[1];
				if (ok$3) {
					return [s$2, true];
				}
				if (j < ex.$length) {
					((j < 0 || j >= ex.$length) ? ($throwRuntimeError("index out of range"), undefined) : ex.$array[ex.$offset + j] = ((j < 0 || j >= ex_in.$length) ? ($throwRuntimeError("index out of range"), undefined) : ex_in.$array[ex_in.$offset + j]));
				}
				j = j + (1) >> 0;
			}
			((i < 0 || i >= ex.$length) ? ($throwRuntimeError("index out of range"), undefined) : ex.$array[ex.$offset + i] = ((i < 0 || i >= ex_in.$length) ? ($throwRuntimeError("index out of range"), undefined) : ex_in.$array[ex_in.$offset + i]));
			_i++;
		}
		return ["", false];
	};
	$pkg.Solve = Solve;
	Play = function(n) {
		var _arg, _arg$1, _arg$2, _r, _r$1, _tuple, cards, i, k, n, ok, r, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _arg$1 = $f._arg$1; _arg$2 = $f._arg$2; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; cards = $f.cards; i = $f.i; k = $f.k; n = $f.n; ok = $f.ok; r = $f.r; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		$r = libs.RandI(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		cards = $makeSlice(sliceType, 4);
		r = "";
		k = 0;
		/* while (true) { */ case 2:
			/* if (!(k < n)) { break; } */ if(!(k < n)) { $s = 3; continue; }
			r = r + ("\n");
			i = 0;
			/* while (true) { */ case 4:
				/* if (!(i < 4)) { break; } */ if(!(i < 4)) { $s = 5; continue; }
				_arg = ptrType.nil;
				_arg$1 = ptrType.nil;
				_r = libs.RandN(8); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_arg$2 = _r + 1 >> 0;
				_r$1 = NewExpr(0, _arg, _arg$1, _arg$2); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				((i < 0 || i >= cards.$length) ? ($throwRuntimeError("index out of range"), undefined) : cards.$array[cards.$offset + i] = _r$1);
				r = r + (" " + libs.Int2Str(((i < 0 || i >= cards.$length) ? ($throwRuntimeError("index out of range"), undefined) : cards.$array[cards.$offset + i]).Value()));
				if (i === 1) {
					r = r + ("\n");
				}
				i = i + (1) >> 0;
			/* } */ $s = 4; continue; case 5:
			_tuple = Solve(cards);
			s = _tuple[0];
			ok = _tuple[1];
			if (ok) {
				r = r + ("\n- !!\n: " + s);
			} else {
				r = r + ("\n- XX\n");
			}
			k = k + (1) >> 0;
		/* } */ $s = 2; continue; case 3:
		$s = -1; return r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Play }; } $f._arg = _arg; $f._arg$1 = _arg$1; $f._arg$2 = _arg$2; $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.cards = cards; $f.i = i; $f.k = k; $f.n = n; $f.ok = ok; $f.r = r; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Play = Play;
	ptrType.methods = [{prop: "Value", name: "Value", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}];
	Expr.init("github.com/suntong/game24/str", [{prop: "op", name: "op", anonymous: false, exported: false, typ: $Int, tag: ""}, {prop: "left", name: "left", anonymous: false, exported: false, typ: ptrType, tag: ""}, {prop: "right", name: "right", anonymous: false, exported: false, typ: ptrType, tag: ""}, {prop: "value", name: "value", anonymous: false, exported: false, typ: $Int, tag: ""}]);
	$init = function() {
		$pkg.$init = function() {};
		/* */ var $f, $c = false, $s = 0, $r; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		$r = libs.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		/* */ } return; } if ($f === undefined) { $f = { $blk: $init }; } $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.$init = $init;
	return $pkg;
})();
};