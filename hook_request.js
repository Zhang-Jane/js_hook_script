function sendAjax(){
	var xhr = new XMLHttpResponse();
	xhr.timeout = 3000;
	xhr.responseType = "json";
	xhr.open("POST", "", true);
	xhr.onload = function(e){

		if (this.status == 200 || this.status == 304){
			console.log(xhr.responseURL);
			console.log(xhr.response);
		}
	}
	var data = {};
	xhr.send(JSON.stringify(data));


}
sendAjax();