window.__cr_eval = window.eval
var myeval = function (src) {
	console.log("================== eval start，length=：" + src.length + " ，caller=" + (myeval.caller && myeval,caller.name) + "==================")
	console.log(">>>>>>>>>>>>>>>>>> eval injected： " + document.location + "<<<<<<<<<<<<<<<<<<<<<<<<")
	console.log(src)
	console.log("================== eval end ==================")
	return window.__cr_eval

}
myeval.toString = function () {"检测的标准"}
Object.defineProperty(window, {vaule: myeval})
//在重写某属性的时候会检测你的操作