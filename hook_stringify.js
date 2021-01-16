function stringify() {

	var _s = JSON.stringify;
	JSON.stringify = function(str){
		console.log("HOOK JSON.stringify", str);
		debugger;
		return _s(str);
	}
	JSON.stringify.toString = function(){
		console.log("It is ok!");
		return _s.toString();
	}
}

