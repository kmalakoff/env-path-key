# env-path-key

Find the environment variable name used for `PATH` on the current platform.

## Install

```sh
npm install env-path-key
```

## Use

```js
const envPathKey = require('env-path-key');

console.log(envPathKey()); // 'PATH' on POSIX, usually 'Path' on Windows
```

Pass `platform` and `env` when inspecting another environment without changing the process environment:

```js
envPathKey({ platform: 'win32', env: { pAtH: 'value' } }); // 'pAtH'
```
