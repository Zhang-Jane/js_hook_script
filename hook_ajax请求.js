function send_ajax(){
// 创建xhr对象
var xhr = new XMLHttpRequest();
// 设置请求超时的时间
xhr.timeout = 3000;
// 设置返回的格式
xhr.responseType = "json";
// 请求方式
var method = "POST";
// 请求的url
var url = ""
xhr.open(method, url, true);
xhr.onload = function(e)
{
    console.log("response的状态 -> ", xhr.status);
    if (this.status == 200 || this.status == 304){
        console.log(xhr.responseURL);
        console.log(xhr.response);
    }
}
var data = {};
xhr.send(JSON.stringify(data));
}
send_ajax();