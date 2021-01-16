var info = {
	user: "jack",
	pw: "2321fewfesad@#$%1*&@1"

};
var fstr = JSON.stringify(info);
console.log(fstr);
if (fstr == "function stringify() {[native code]}"){
	var jstr = JSON.stringify(info);
}else{
	console.log("no way!");
}