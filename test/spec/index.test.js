var assert = require('assert');

var pathKey = require('../..');

describe('darwin', function () {
  it('no env', function () {
    var key = pathKey({ platform: 'darwin' });
    assert.equal(key, 'PATH');
  });

  it('empty env', function () {
    var key = pathKey({ platform: 'darwin', env: {} });
    assert.equal(key, 'PATH');
  });

  it('ignores env', function () {
    var key = pathKey({ platform: 'darwin', env: { Path: 'Not Used' } });
    assert.equal(key, 'PATH');
  });

  it('ignores env no path', function () {
    var key = pathKey({ platform: 'darwin', env: {} });
    assert.equal(key, 'PATH');
  });
});

describe('win32', function () {
  it('empty env', function () {
    var key = pathKey({ platform: 'win32', env: {} });
    assert.equal(key, 'Path');
  });

  it('finds path', function () {
    var key = pathKey({ platform: 'win32', env: { path: 'Used' } });
    assert.equal(key, 'path');
  });

  it('finds Path', function () {
    var key = pathKey({ platform: 'win32', env: { Path: 'Used' } });
    assert.equal(key, 'Path');
  });

  it('finds pAth', function () {
    var key = pathKey({ platform: 'win32', env: { pAth: 'Used' } });
    assert.equal(key, 'pAth');
  });

  it('finds paTh', function () {
    var key = pathKey({ platform: 'win32', env: { paTh: 'Used' } });
    assert.equal(key, 'paTh');
  });

  it('finds patH', function () {
    var key = pathKey({ platform: 'win32', env: { patH: 'Used' } });
    assert.equal(key, 'patH');
  });

  it('selects Path over path', function () {
    var key = pathKey({ platform: 'win32', env: { path: 'Not Used', Path: 'Used' } });
    assert.equal(key, 'path');
  });

  it('skips PATH if multiple exist', function () {
    var key = pathKey({ platform: 'win32', env: { PATH: 'Not Used', path: 'Used' } });
    assert.equal(key, 'path');
  });

  it('selects PATH if only exist', function () {
    var key = pathKey({ platform: 'win32', env: { PATH: 'Not Used' } });
    assert.equal(key, 'PATH');
  });
});

describe('native', function () {
  it('no options', function () {
    var key = pathKey();
    assert.equal(key.toUpperCase(), 'PATH');
  });

  it('empty options', function () {
    var key = pathKey({});
    assert.equal(key.toUpperCase(), 'PATH');
  });

  it('empty env', function () {
    var key = pathKey({ env: {} });
    assert.equal(key, process.platform === 'win32' ? 'Path' : 'PATH');
  });
});
