if (!Object.keys) Object.keys = require('object-keys');
if (!Array.prototype.find)
  Array.prototype.find = function find(fn) {
    for (var i = 0; i < this.length; i++) {
      if (fn(this[i])) return this[i];
    }
    return null;
  };
