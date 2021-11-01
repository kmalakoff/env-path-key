function windowsPathKey(env) {
  var pathKey = 'Path';
  for (var key in env) {
    if (
      key.length === 4 &&
      (key[0] === 'p' || key[0] === 'P') &&
      (key[1] === 'a' || key[1] === 'A') &&
      (key[2] === 't' || key[2] === 'T') &&
      (key[3] === 'h' || key[3] === 'H')
    ) {
      pathKey = key;
      if (pathKey !== 'PATH') return key; // 'which' in cross-spawn uses PATH in windows, but this causes issues in repeat spawn calls given PATH get propagated so PATH_KEY needs to select 'Path' over 'PATH' if both exist
    }
  }
  return pathKey;
}

module.exports = function (options) {
  var platform = options ? options.platform || process.platform : process.platform;
  if (platform !== 'win32') return 'PATH';
  var env = options ? options.env || process.env : process.env;
  return windowsPathKey(env);
};
