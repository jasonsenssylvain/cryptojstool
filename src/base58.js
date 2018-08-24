const bignum        = require('bignum');

const ALPHABET      = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const ENCODED_ZERO  = ALPHABET[0];

class Base58 {

  static _init() {
    if (!Base58.inited) {
      Base58.ALPHABET_BUF = {};
      for (let i = 0; i < ALPHABET.length; i++) {
        Base58.ALPHABET_BUF[ALPHABET[i]] = i;
      }

      Base58.inited = true;
    }
  }

  static encode(buf) {
    Base58._init();

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

  static decode(str) {
    Base58._init();

    if (!str || str.length == 0)
      return "";

    let data = bignum(0);
    for (let i = 0; i < str.length; i ++) {
      let c = str[i];

      let indexNum = Base58.ALPHABET_BUF[c];
      if (indexNum == null || indexNum == undefined) 
        throw new Error(`str error: ${str}`);

      data = data.mul(58);
      data = data.add(indexNum);
    }

    let i = 0;
    while(i < str.length && str[i] == ENCODED_ZERO) {
      i ++;
    }

    if (i > 0) {
      let zb = new Buffer(i);
      zb.fill(0);
      if (i == str.length) {
        return zb.toString();
      }

      data = data.toBuffer();
      return Buffer.concat([zb, data], i + data.length);
    }

    return data.toBuffer();
  }
}

module.exports = Base58;