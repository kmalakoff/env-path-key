import assert from 'assert';

import pathKey from 'env-path-key';

const isWindows = process.platform === 'win32' || /^(msys|cygwin)$/.test(process.env.OSTYPE);

describe('darwin', () => {
  it('no env', () => {
    const key = pathKey({ platform: 'darwin' });
    assert.equal(key, 'PATH');
  });

  it('empty env', () => {
    const key = pathKey({ platform: 'darwin', env: {} });
    assert.equal(key, 'PATH');
  });

  it('ignores env', () => {
    const key = pathKey({ platform: 'darwin', env: { Path: 'Not Used' } });
    assert.equal(key, 'PATH');
  });

  it('ignores env no path', () => {
    const key = pathKey({ platform: 'darwin', env: {} });
    assert.equal(key, 'PATH');
  });
});

describe('win32', () => {
  it('empty env', () => {
    const key = pathKey({ platform: 'win32', env: {} });
    assert.equal(key, 'Path');
  });

  it('finds path', () => {
    const key = pathKey({ platform: 'win32', env: { path: 'Used' } });
    assert.equal(key, 'path');
  });

  it('finds Path', () => {
    const key = pathKey({ platform: 'win32', env: { Path: 'Used' } });
    assert.equal(key, 'Path');
  });

  it('finds pAth', () => {
    const key = pathKey({ platform: 'win32', env: { pAth: 'Used' } });
    assert.equal(key, 'pAth');
  });

  it('finds paTh', () => {
    const key = pathKey({ platform: 'win32', env: { paTh: 'Used' } });
    assert.equal(key, 'paTh');
  });

  it('finds patH', () => {
    const key = pathKey({ platform: 'win32', env: { patH: 'Used' } });
    assert.equal(key, 'patH');
  });

  it('skips PATH if multiple exist', () => {
    const key = pathKey({ platform: 'win32', env: { PATH: 'Not Used', path: 'Used' } });
    assert.equal(key, 'path');
  });

  it('selects PATH if only exist', () => {
    const key = pathKey({ platform: 'win32', env: { PATH: 'Not Used' } });
    assert.equal(key, 'PATH');
  });
});

describe('native', () => {
  it('no options', () => {
    const key = pathKey();
    assert.equal(key.toUpperCase(), 'PATH');
  });

  it('empty options', () => {
    const key = pathKey({});
    assert.equal(key.toUpperCase(), 'PATH');
  });

  it('empty env', () => {
    const key = pathKey({ env: {} });
    assert.equal(key, isWindows ? 'Path' : 'PATH');
  });
});
