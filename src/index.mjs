import startsCaseInsensitiveFn from './startsCaseInsensitiveFn.mjs';

const startsPath = startsCaseInsensitiveFn('path');

function windowsPathKey(env) {
  let pathKey = 'Path';
  for (const key in env) {
    if (key.length === 4 && startsPath(key)) {
      pathKey = key; // match https://github.com/sindresorhus/path-key reverse search
    }
  }
  return pathKey;
}

export default (options) => {
  const platform = options ? options.platform || process.platform : process.platform;
  if (platform !== 'win32') return 'PATH';
  const env = options ? options.env || process.env : process.env;
  return windowsPathKey(env);
};
