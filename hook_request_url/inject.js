var code = function(){
    var open = window.XMLHttpRequest.prototype.open;
    console.log("hooking");
    window.XMLHttpRequest.prototype.open = function(method, url, async){
        if (url.indexOf("cf_chl_captcha_tk") > -1){
        	console.log(url);
            debugger;
        }
        return open.apply(this, arguments);
    };
    
    }


var script = document.createElement("script");
script.textContent = "(" + code + ")()";
(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);