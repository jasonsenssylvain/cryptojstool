const crypto        = require('crypto');
const secp256k1     = require('secp256k1');

class ECKey {

  constructor(privKey, compressed) {
    this._compressed = true;
    if (typeof compressed === 'boolean')
      this._compressed = compressed;

    if (privKey)
      this.privateKey = privKey;
  }

  get privateKey() {
    return this.key;
  }

  set privateKey(bytes) {
    var byteArr;
    if (Buffer.isBuffer(bytes)) {
      this.key = bytes;
      byteArr = [].slice.call(bytes);
    } else if (bytes instanceof Uint8Array) {
      byteArr = [].slice.call(bytes)
      this.key = Buffer.from(byteArr)
    } else if (Array.isArray(bytes)) {
      byteArr = bytes
      this.key = Buffer.from(byteArr)
    } else {
      throw new Error('Invalid type. private key bytes must be either a Buffer, Array, or Uint8Array.')
    }

    if (bytes.length !== 32) throw new Error('private key bytes must have a length of 32');

    if (this._compressed) {
      this._exportKey = Buffer.concat([ this.key, Buffer.from([0x01]) ])
    } else {
      this._exportKey = Buffer.concat([ this.key ])
    }

    this._publicKey = null;
    this._pubKeyHash = null;
  }

  get privateExportKey() {
    return this._exportKey;
  }

  get publicHash() {
    return this.pubKeyHash;
  }

  static hashPubKey(pubkey) {
    let sha = crypto.createHash('sha256').update(pubkey).digest();
    let result = crypto.createHash('rmd160').update(sha).digest();
    return result;
  }

  get pubKeyHash() {
    if (this._pubKeyHash) return this._pubKeyHash;
    this._pubKeyHash = ECKey.hashPubKey(this.publicKey);
    return this._pubKeyHash;
  }

  get publicKey() {
    if (!this._publicKey)
      this._publicKey = secp256k1.publicKeyCreate(this.key, this.compressed);
    return Buffer.from(this._publicKey);
  }

  get compressed() {
    return this._compressed;
  }

  set compressed(val) {
    let c = !!val;
    if (c === this._compressed) return;

    let pk = this.privateKey;
    this._compressed = c;
    this.privateKey = pk;
  }

  toString() {
    return this.privateKey.toString('hex');
  }
}

module.exports = ECKey;