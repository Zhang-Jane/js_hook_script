// ==UserScript==
// @name        hook_property
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://dun.163.com/trial/jigsaw
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var n = window.gdxidpyhxde;
    Object.defineProperty(window, 'gdxidpyhxde', {
    get: function(){
        console.log("hooking this para");
        return n;
    },
    set: function(val){
        console.log("get this para  ->", val);
        debugger;
        var n = val;
        return n;
    }
    }
    );
})();