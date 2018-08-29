const assert        = require('assert');

const secureRandom  = require('secure-random');

const ECKey         = require('./eckey.js');
const Base58Check   = require('./base58check.js');

const DEFAULT_VERSIONS = {
  public: 0x0,
  private: 0x80
}

class CoinKey extends ECKey {

  constructor(privateKey, versions) {
    assert(CoinKey._isArrayish(privateKey), 'privateKey must be arrayish');
    super(privateKey, true);
    this._versions = CoinKey._normalizeVersions(versions) || JSON.parse(JSON.stringify(DEFAULT_VERSIONS));
  }

  get versions() {
    return this._versions;
  }

  set versions(val) {
    this._versions = val;
  }

  get privateWif() {
    return Base58Check.encode(this.privateExportKey, this.versions.private);
  }

  get publicAddress() {
    let versionBuf = CoinKey._bufferizeVersion(this.versions.public);
    return Base58Check.encode(this.pubKeyHash, versionBuf);
  }

  toString() {
    return this.privateWif + ": " + this.publicAddress;
  }

  static fromWif(wif, versions) {
    versions = CoinKey._normalizeVersions(versions);
    let res = Base58Check.decode(wif);
    let version = res.slice(0, 1);
    let privateKey = res.slice(1);
    let compressed = privateKey.length === 33;
    if (compressed)
      privateKey = privateKey.slice(0, 32);

    let v = versions || {};
    v.private = v.private || version.readUInt8(0);
    v.public = v.public || v.private - 0x80;

    let coinkey = new CoinKey(privateKey, v);
    coinkey.compressed = compressed;
    return coinkey;
  }

  static createRandom(versions) {
    let privateKey = secureRandom.randomBuffer(32);
    return new CoinKey(privateKey, versions);
  }

  static addressToHash(address) {
    return Base58Check.decode(address).slice(1);
  }

  static _isArrayish(arr) {
    return Array.isArray(arr) || (arr instanceof Uint8Array) || Buffer.isBuffer(arr);
  }

  static _normalizeVersions(versions) {
    if (!versions) return null;
    if (typeof versions !== 'object') return null;
    versions = JSON.parse(JSON.stringify(versions));
    if (versions.version) versions.versions = versions.version;
    if (versions && 'private' in versions) 
      return versions;
    else 
      versions = versions.versions;

    if (versions && 'private' in versions) 
      return versions;
    else 
      return null
  }

  static _bufferizeVersion(version) {
    if (typeof version === 'string') 
      return CoinKey._hexStringToBuffer(version)
    if (typeof version === 'number') 
      return CoinKey._uintToBuffer(version)
    throw new Error('invalid version type.')
  }

  static _hexStringToBuffer(value) {
    let isValidRE = /^(0x)?([\dA-Fa-f]{2})+$/g;
    if (!isValidRE.test(value)) 
      throw new Error('invalid hex string.');
    return Buffer.from(value.slice(value.slice(0, 2) === '0x' ? 2 : 0), 'hex')
  }

  static _uintToBuffer(value) {
    let length;
    if (value === 0) 
      length = 1;
    else if (value > 0) 
      length = Math.ceil((Math.log(value + 1) / Math.log(2)) / 8);

    let buf = Buffer.alloc(length)
    buf.writeUIntBE(value, 0, length)

    return buf
  }
}

module.exports = CoinKey;