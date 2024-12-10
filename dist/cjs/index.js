"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _startsCaseInsensitiveFn = /*#__PURE__*/ _interop_require_default(require("./startsCaseInsensitiveFn.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var startsPath = (0, _startsCaseInsensitiveFn.default)('path');
function windowsPathKey(env) {
    var pathKey = 'Path';
    for(var key in env){
        if (key.length === 4 && startsPath(key)) {
            pathKey = key; // match https://github.com/sindresorhus/path-key reverse search
        }
    }
    return pathKey;
}
var _default = function(options) {
    var platform = options ? options.platform || process.platform : process.platform;
    if (platform !== 'win32') return 'PATH';
    var env = options ? options.env || process.env : process.env;
    return windowsPathKey(env);
};
/* CJS INTEROP */ if (exports.__esModule && exports.default) { try { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) { exports.default[key] = exports[key]; } } catch (_) {}; module.exports = exports.default; }