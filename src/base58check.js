const crypto          = require('crypto');

const Base58          = require('./base58.js');
//To add extra security against typos or transcription errors, 
// Base58Check is a Base58 encoding format, 
// frequently used in bitcoin, 
// which has a built-in error-checking code. 
// The checksum is an additional four bytes added to the end of the data that is being encoded. 
// The checksum is derived from the hash of the encoded data and can therefore be used to detect and prevent transcription and typing errors.
class Base58Check {

  static sha256x2(buf) {
    let tmp = crypto.createHash('sha256').update(buf).digest();
    return crypto.createHash('sha256').update(tmp).digest();
  }

  static encode(payload, version) {
    if (Array.isArray(payload) || payload instanceof Uint8Array) {
      payload = Buffer.from(payload);
    }

    let buf;
    if (version != null && version != undefined) {
      if (typeof version == 'number') {
        version = new Buffer([version]);
      }
      buf = Buffer.concat([version, payload]);
    } else {
      buf = payload;
    }

    let checksum = Base58Check.sha256x2(buf).slice(0, 4);
    let result = Buffer.concat([buf, checksum]);
    return Base58.encode(result);
  }

  static decode(string, version) {
    let buf = Base58.decode(string);
    let versionLength = 0;

    if (version == null || version == undefined) {

    } else {
      if (typeof version == 'number') 
        version = Buffer.from([version]);
      versionLength = version.length;
      let versionCompare = buf.slice(0, versionLength);
      if (versionCompare.toString('hex') !== version.toString('hex'))
        throw new Error('Invalid version');
    }

    let checksum = buf.slice(-4);
    let endPos = buf.length - 4;
    let bytes = buf.slice(0, endPos);

    var newChecksum = Base58Check.sha256x2(bytes).slice(0, 4)
    if (checksum.toString('hex') !== newChecksum.toString('hex')) {
      throw new Error('Invalid checksum');
    }

    return bytes.slice(versionLength)
  }

  static isValid(base58string, version) {
    try {
      Base58Check.decode(base58string, version);
    } catch (e) {
      return false;
    }
    return true;
  }

}

module.exports = Base58Check;