var code = function(){
    var open = window.XMLHttpRequest.prototype.open;
    window.XMLHttpRequest.prototype.open = function(method, url, async){
        if (url.indexOf("") > -1){
            debugger;
        }
        return open.apply(this, arguments);
    };
    }

var script = document.createElement("script");
script.textContent = "(" + code + ")()";
(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);