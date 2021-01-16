// ==UserScript==
// @name         HOOK DOM修改断点
// @version      0.1
// @description   
// @include      *
// @grant        none
// @run-at       document-body
// ==/UserScript==

(function() {
    'use strict';

    var oldFn = Element.prototype.setAttribute;
    Element.prototype.setAttribute = function (attr, value) {
        console.log('====Set Attribute Begin=====');
        console.log("this:" + this);
        console.log('attr:' + attr);
        console.log('value:' + value);
        console.log('====Set Attribute End=====');
        debugger;
        oldFn.call(this, attr, value);
    };

})();