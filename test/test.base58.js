const assert          = require('assert');
const secureRandom    = require('secure-random');
const Base58           = require('../src/base58.js');

describe('Base58', function () {
  describe('+ ECKey()', function () {
    it('> should encode successfully 1', function () {
      let hex = "";
      let result = Base58.encode(hex);
      assert.equal(String(hex), String(result));
    });

    it('> should encode successfully 2 ', function () {
      let hex = "61";
      let result = Base58.encode(hex);
      assert.equal("2g", result);
    });

    it('> should encode successfully 3 ', function () {
      let hex = "626262";
      let result = Base58.encode(hex);
      assert.equal("a3gV", result);
    });

    it('> should encode successfully 4 ', function () {
      let hex = "73696d706c792061206c6f6e6720737472696e67";
      let result = Base58.encode(hex);
      assert.equal("2cFupjhnEsSn59qHXstmK2ffpLv2", result);
    });

    it('> should encode successfully 5 ', function () {
      let hex = "00eb15231dfceb60925886b67d065299925915aeb172c06647";
      let result = Base58.encode(hex);
      assert.equal("1NS17iag9jJgTHD1VXjvLCEnZuQ3rJDE9L", result);
    });

    it('> should encode successfully 6 ', function () {
      let hex = "516b6fcd0f";
      let result = Base58.encode(hex);
      assert.equal("ABnLTmg", result);
    });

    it('> should encode successfully 7 ', function () {
      let hex = "bf4f89001e670274dd";
      let result = Base58.encode(hex);
      assert.equal("3SEo3LWLoPntC", result);
    });

    it('> should encode successfully 8 ', function () {
      let hex = "00000000000000000000";
      let result = Base58.encode(hex);
      assert.equal("1111111111", result);
    });

    it('> should encode successfully 9 ', function () {
      let hex = "801184cd2cdd640ca42cfc3a091c51d549b2f016d454b2774019c2b2d2e08529fd206ec97e";
      let result = Base58.encode(hex);
      assert.equal("5Hx15HFGyep2CfPxsJKe2fXJsCVn5DEiyoeGGF6JZjGbTRnqfiD", result);
    });

    it('> should encode successfully 10 ', function () {
      let hex = "ffffffffffffffffffffffffffffffff";
      let result = Base58.encode(hex);
      assert.equal("YcVfxkQb6JRzqk5kF2tNLv", result);
    });
  });
});