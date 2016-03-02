var __mods__ = {};
var __entry__;
function define(mod, deps, func) {
    __mods__[mod] = {
        deps: deps,
        func: func,
        instance: null
    };
    __entry__=mod;
}
function __require__(n) {
    throw 'not implemented';
}
function __get_module__(name) {
    var m = __mods__[name];
    if (!m.instance) {
        var exports = {};
        var module = { exports: exports };
        m.instance = m.func.apply(this,m.deps.map(function (n) {
            switch (n) {
                case 'require': return __require__;
                case 'module': return module;
                case 'exports': return exports;
                default: return __get_module__(n);
            }

        }));
    }
    return m.instance;
}
define("ctl", ["require", "exports"], function (require, exports) {
    "use strict";
    document.addEventListener('DOMContentLoaded', function (evt) {
        var div = document.createElement('div');
        document.body.appendChild(div);
        var div2 = document.createElement('div');
        document.body.appendChild(div2);
        document.addEventListener('mousemove', function (evt) {
            div.innerHTML = evt.x + ':' + evt.y;
        });
        document.addEventListener('mousedown', function (evt) {
            div2.innerHTML = 'down';
        });
        document.addEventListener('mouseup', function (evt) {
            div2.innerHTML = 'up';
        });
    });
    return 1;
});
define("app", ["require", "exports", "ctl"], function (require, exports, ctl) {
    "use strict";
    ctl + 1;
});
;__get_module__(__entry__);