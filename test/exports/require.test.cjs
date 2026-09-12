const assert = require('assert');
const envPathKey = require('env-path-key');

describe('exports .cjs', () => {
  it('default', () => {
    assert.equal(typeof envPathKey, 'function');
  });
});
