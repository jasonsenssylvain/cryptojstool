const bignum        = require('bignum');

const ALPHABET      = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const ENCODED_ZERO  = ALPHABET[0];

class Base58 {

  static encode(source) {

    let buf = Buffer.from(source, 'hex');
    let str = "";
    let x = bignum.fromBuffer(buf);
    while(x.gt(0)) {
      let c = ALPHABET[x.mod(58)];
      str += c;
      x = x.div(58);
    }

    for (let i = 0; i < buf.length; i ++) {
      if (buf[i] != 0)
        break;
      str += ENCODED_ZERO;
    }

    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
  }

  static decodeUnsafe(data) {
    if (typeof data !== 'string') throw new TypeError('Expected String')
    if (data.length === 0) return Buffer.allocUnsafe(0)

    let bytes = [0]
    for (let i = 0; i < data.length; i++) {
      let value = Base58.ALPHABET_MAP[data[i]];
      if (value === undefined) return

      for (let j = 0, carry = value; j < bytes.length; ++j) {
        carry += bytes[j] * ALPHABET.length
        bytes[j] = carry & 0xff
        carry >>= 8
      }

      while (carry > 0) {
        bytes.push(carry & 0xff);
        carry >>= 8;
      }
    }

    // deal with leading zeros
    for (let k = 0; data[k] === ALPHABET.charAt(0) && k < data.length - 1; ++k) {
      bytes.push(0)
    }

    return Buffer.from(bytes.reverse())
  }

  static decode(data) {
    let buf = Base58.decodeUnsafe(data);

    if (buf) return buf;
    throw new Error('Non-base' + BASE + ' character');
  }
}

module.exports = Base58;