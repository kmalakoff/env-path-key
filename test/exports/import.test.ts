import assert from 'assert';
import envPathKey from 'env-path-key';

describe('exports .ts', () => {
  it('default', () => {
    assert.equal(typeof envPathKey, 'function');
  });
});
