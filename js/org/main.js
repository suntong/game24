"use strict";
var $mainPkg;
var $load = {};
(function(){
	var count = 0;
	var total = 0;
	var path = "github.com/suntong/game24/str/game24";
	var info = [{"path":"prelude","hash":"2f55d1e8cd60b3405002e438e9fbfd71293e089f"},{"path":"github.com/gopherjs/gopherjs/js","hash":"39adac344dab8f3a413d385aca9a008ba8236ffc"},{"path":"runtime/internal/sys","hash":"77e012d66c0097d87d8bfc5c8d3f0db232838839"},{"path":"runtime","hash":"a5165d1b42f569a8a7159c3daf0f396ee9548be9"},{"path":"errors","hash":"66f5c7efeed280c40715d24ee11b1812ca543e6e"},{"path":"internal/race","hash":"3997cbbe4d58b6311a3f979f419a080bb4bd3b2a"},{"path":"sync/atomic","hash":"033db60c43299279efeecaad8ce5c05086db239a"},{"path":"sync","hash":"8acccd577ac7a3ce5a8f6c35e73383291ae39d7c"},{"path":"io","hash":"85e9aca6ad148c53517b9c9983d7451ebfa46ba3"},{"path":"math","hash":"27ef9caad7b5014b56a9915b21b10c23fd0bc79a"},{"path":"syscall","hash":"bd6dc185566cfcf3996a705d1211bfe813d39315"},{"path":"github.com/gopherjs/gopherjs/nosync","hash":"2529177056f7e95645751eb9ac46b5cc5dc42ab8"},{"path":"time","hash":"d32d5c8fdce17c42a6a8ffc66b6a3af6711f4a69"},{"path":"internal/poll","hash":"54c135b18418c637b7f0678d48b6e27ae9f3157a"},{"path":"internal/testlog","hash":"ecd33ec5fe7b61a8c0a942bd234634ac45d783b6"},{"path":"os","hash":"571d2aaff28112a99ecd8e4ff4abf1542676f1ad"},{"path":"unicode/utf8","hash":"d0b795e7197c20d696fcf1ed8860449407665a78"},{"path":"strconv","hash":"a59b6c46d9e2f53060a077cc9f295b07b6fcbfe6"},{"path":"unicode","hash":"b78df48be71211526336cfe6f43abd42ea510091"},{"path":"reflect","hash":"f64062ca845eb3cd4c207bcbb036c321db76aa5c"},{"path":"fmt","hash":"3810947b3f165a57b1090d17e12dbd932723c35a"},{"path":"math/rand","hash":"62be40f11ece2a109103ff56662b3725ac791203"},{"path":"github.com/suntong/game24/str/libs","hash":"0c82e35749e8b76489cb98b5f20cd28a273fb396"},{"path":"github.com/suntong/game24/str","hash":"ca66003de304f7f55619f9582813a5677f4a96a9"},{"path":"github.com/suntong/game24/str/game24","hash":"11d7eddb274159bab09a789ffd6eb1dc5462ec52"}];
	var log = document.getElementById("log");
	var finished = function() {
		for (var i = 0; i < info.length; i++) {
			$load[info[i].path]();
		}
		$mainPkg = $packages[path];
		$synthesizeMethods();
		$packages["runtime"].$init();
		$go($mainPkg.$init, []);
		$flushConsole();
	}
	var done = function() {
		count++;
		if (window.jsgoProgress) { window.jsgoProgress(count, total); }
		if (count == total) { finished(); }
	}
	var get = function(url) {
		total++;
		var tag = document.createElement('script');
		tag.src = url;
		tag.onload = done;
		tag.onreadystatechange = done;
		document.head.appendChild(tag);
	}
	for (var i = 0; i < info.length; i++) {
		get("https://pkg.jsgo.io/" + info[i].path + "." + info[i].hash + ".js");
	}
})();