var code = function(){
    var open = window.XMLHttpRequest.prototype.setRequestHeader;
    window.XMLHttpRequest.prototype.setRequestHeader = function(key ,value){
        if (key == ''){
            debugger;
        }
        return open.apply(this, arguments);
    };
    }

var script = document.createElement("script");
script.textContent = "(" + code + ")()";
(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);