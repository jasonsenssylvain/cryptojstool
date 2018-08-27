const assert          = require('assert');
const secureRandom    = require('secure-random');
const Base58Check     = require('../src/base58check.js');

describe('> Base58Check', function () {
  describe('+ Base58Check decode encode 1', function () {
    it('should success 1', function () {
      let string = "1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62i";
      let payload = "0065a16059864a2fdbc7c99a4723a8395bc6f188eb";

      let actual = Base58Check.decode(string).toString('hex');
      assert.equal(payload, actual);

      let buf = Buffer.from(payload, 'hex');
      let a = Base58Check.encode(buf);
      assert.equal(a, string);
    }) 
  });

  describe('+ Base58Check decode encode 2', function () {
    it('should success 2', function () {
      let string = "3CMNFxN1oHBc4R1EpboAL5yzHGgE611Xou";
      let payload = "0574f209f6ea907e2ea48f74fae05782ae8a665257";

      let actual = Base58Check.decode(string).toString('hex');
      assert.equal(payload, actual);

      let buf = Buffer.from(payload, 'hex');
      let a = Base58Check.encode(buf);
      assert.equal(a, string);
    }) 
  });

  describe('+ Base58Check decode encode 3', function () {
    it('should success 3', function () {
      let string = "5Kd3NBUAdUnhyzenEwVLy9pBKxSwXvE9FMPyR4UKZvpe6E3AgLr";
      let payload = "80eddbdc1168f1daeadbd3e44c1e3f8f5a284c2029f78ad26af98583a499de5b19";

      let actual = Base58Check.decode(string).toString('hex');
      assert.equal(payload, actual);

      let buf = Buffer.from(payload, 'hex');
      let a = Base58Check.encode(buf);
      assert.equal(a, string);
    }) 
  });

  describe('+ Base58Check decode encode 4', function () {
    it('should success 4', function () {
      let string = "Kz6UJmQACJmLtaQj5A3JAge4kVTNQ8gbvXuwbmCj7bsaabudb3RD";
      let payload = "8055c9bccb9ed68446d1b75273bbce89d7fe013a8acd1625514420fb2aca1a21c401";

      let actual = Base58Check.decode(string).toString('hex');
      assert.equal(payload, actual);

      let buf = Buffer.from(payload, 'hex');
      let a = Base58Check.encode(buf);
      assert.equal(a, string);
    }) 
  });

  describe('+ Base58Check decode encode 5', function () {
    it('should success 5', function () {
      let string = "9213qJab2HNEpMpYNBa7wHGFKKbkDn24jpANDs2huN3yi4J11ko";
      let payload = "ef36cb93b9ab1bdabf7fb9f2c04f1b9cc879933530ae7842398eef5a63a56800c2";

      let actual = Base58Check.decode(string).toString('hex');
      assert.equal(payload, actual);

      let buf = Buffer.from(payload, 'hex');
      let a = Base58Check.encode(buf);
      assert.equal(a, string);
    })       
  });

  describe('+ Base58Check decode encode 6', function () {
    it('should success 6', function () {
      let string = "1Ax4gZtb7gAit2TivwejZHYtNNLT18PUXJ";
      let payload = "006d23156cbbdcc82a5a47eee4c2c7c583c18b6bf4";

      let actual = Base58Check.decode(string).toString('hex');
      assert.equal(payload, actual);

      let buf = Buffer.from(payload, 'hex');
      let a = Base58Check.encode(buf);
      assert.equal(a, string);
    })      
  });

  describe('+ Base58Check decode encode 7', function () {
    it('should success 7', function () {
      let string = "2NBFNJTktNa7GZusGbDbGKRZTxdK9VVez3n";
      let payload = "c4c579342c2c4c9220205e2cdc285617040c924a0a";

      let actual = Base58Check.decode(string).toString('hex');
      assert.equal(payload, actual);

      let buf = Buffer.from(payload, 'hex');
      let a = Base58Check.encode(buf);
      assert.equal(a, string);
    })  
  });

  describe('+ Base58Check decode encode 8', function () {
    it('should success 8', function () {
      let string = "L1RrrnXkcKut5DEMwtDthjwRcTTwED36thyL1DebVrKuwvohjMNi";
      let payload = "807d998b45c219a1e38e99e7cbd312ef67f77a455a9b50c730c27f02c6f730dfb401";

      let actual = Base58Check.decode(string).toString('hex');
      assert.equal(payload, actual);

      let buf = Buffer.from(payload, 'hex');
      let a = Base58Check.encode(buf);
      assert.equal(a, string);
    }) 
      
  });

  describe('+ Base58Check decode encode 9', function () {
    it('should success 9', function () {
      let string = "93DVKyFYwSN6wEo3E2fCrFPUp17FtrtNi2Lf7n4G3garFb16CRj";
      let payload = "efd6bca256b5abc5602ec2e1c121a08b0da2556587430bcf7e1898af2224885203";

      let actual = Base58Check.decode(string).toString('hex');
      assert.equal(payload, actual);

      let buf = Buffer.from(payload, 'hex');
      let a = Base58Check.encode(buf);
      assert.equal(a, string);
    }) 
  });

  describe('+ Base58Check decode encode 10', function () {
    it('should success 10', function () {
      let string = "1PRTTaJesdNovgne6Ehcdu1fpEdX7913CK";
      let payload = "00f5f2d624cfb5c3f66d06123d0829d1c9cebf770e";

      let actual = Base58Check.decode(string).toString('hex');
      assert.equal(payload, actual);

      let buf = Buffer.from(payload, 'hex');
      let a = Base58Check.encode(buf);
      assert.equal(a, string);
    }) 
  });

  describe('+ Base58Check decode encode with version 1', function () {
    it('> should success 1', function () {
      let version = "0x80";
      let versionInt = parseInt(version, 16);
      console.log("versionInt", versionInt);
      let string = "5Hx15HFGyep2CfPxsJKe2fXJsCVn5DEiyoeGGF6JZjGbTRnqfiD";
      let payload = "1184cd2cdd640ca42cfc3a091c51d549b2f016d454b2774019c2b2d2e08529fd";

      let versionBuf = Buffer.from(version.substr(2), "hex");
      let actual = Base58Check.decode(string, versionInt).toString('hex');
      assert.equal(payload, actual);

      let buf = Buffer.from(payload, 'hex');
      let a = Base58Check.encode(buf, versionBuf);
      assert.equal(a, string);
    }) 
  });

  describe('+ Base58Check decode encode with version 2', function () {
    it('> should success 2', function () {
      let version = "0x80";
      let versionInt = parseInt(version, 16);
      console.log("versionInt", versionInt);
      let string = "KwomKti1X3tYJUUMb1TGSM2mrZk1wb1aHisUNHCQXTZq5auC2qc3";
      let payload = "1184cd2cdd640ca42cfc3a091c51d549b2f016d454b2774019c2b2d2e08529fd01";

      let versionBuf = Buffer.from(version.substr(2), "hex");
      let actual = Base58Check.decode(string, versionInt).toString('hex');
      assert.equal(payload, actual);

      let buf = Buffer.from(payload, 'hex');
      let a = Base58Check.encode(buf, versionBuf);
      assert.equal(a, string);
    }) 
  });

  describe('+ Base58Check decode encode with version 3', function () {
    it('> should success 3', function () {
      let version = "0x00";
      let versionInt = parseInt(version, 16);
      console.log("versionInt", versionInt);
      let string = "16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGS";
      let payload = "3c176e659bea0f29a3e9bf7880c112b1b31b4dc8";

      let versionBuf = Buffer.from(version.substr(2), "hex");
      let actual = Base58Check.decode(string, versionInt).toString('hex');
      assert.equal(payload, actual);

      let buf = Buffer.from(payload, 'hex');
      let a = Base58Check.encode(buf, versionBuf);
      assert.equal(a, string);
    }) 
  });

  describe('+ Base58Check decode encode with version 4', function () {
    it('> should success 4', function () {
      let version = "0x9e";
      let versionInt = parseInt(version, 16);
      console.log("versionInt", versionInt);
      let string = "QPCgUjWzmfNfXzsQBHJ4KZsPKbmaz99PAyZP9ubFFpBBXWuSQh6n";
      let payload = "1184cd2cdd640ca42cfc3a091c51d549b2f016d454b2774019c2b2d2e08529fd01";

      let versionBuf = Buffer.from(version.substr(2), "hex");
      let actual = Base58Check.decode(string, versionInt).toString('hex');
      assert.equal(payload, actual);

      let buf = Buffer.from(payload, 'hex');
      let a = Base58Check.encode(buf, versionBuf);
      assert.equal(a, string);
    }) 
  });
});