import assert from 'assert';
import envPathKey from 'env-path-key';

describe('exports .mjs', () => {
  it('default', () => {
    assert.equal(typeof envPathKey, 'function');
  });
});
