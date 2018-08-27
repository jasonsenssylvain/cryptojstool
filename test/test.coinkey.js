const assert          = require('assert');
const secureRandom    = require('secure-random');
const CoinKey         = require('../src/coinkey.js');

describe('CoinKey', function () {
  describe('+ constructor', function () {
    describe('> when private key passed', function () {
      it('should return an instance of CoinKey with fields set', function () {
        let privateKey = secureRandom.randomBuffer(32)
        let ck = new CoinKey(privateKey)
        assert(ck.compressed)
        assert.equal(ck.privateKey.toString('hex'), privateKey.toString('hex'))
      })
    })

    describe('> when private key and versions', function () {
      it('should return an instance of CoinKey with versions', function () {
        let privateKey = "1184cd2cdd640ca42cfc3a091c51d549b2f016d454b2774019c2b2d2e08529fd";
        let versions =  {"private": 128, "public": 0};
        let ck = new CoinKey(Buffer.from(privateKey, 'hex'), versions)
        assert(ck.compressed)
      })
    })

    describe('> when a coininfo object is passed for versions', function () {
      it('should return the proper address / WIF', function () {
        let privateKey = "1184cd2cdd640ca42cfc3a091c51d549b2f016d454b2774019c2b2d2e08529fd";
        let versions = {"private": 176, "public": 48};
        let privateWifCompressed = "T3e2me1BvRs95K7E8eQ8eha9oRPL1g2U6vmjE5px6RjzbUTvKZsf";
        let publicAddressCompressed = "LZyGd5dCPVkVUjA5QbpuUfMNgcmNDLjswH";

        let ck = new CoinKey(Buffer.from(privateKey, 'hex'), versions)
        assert.equal(ck.privateWif, privateWifCompressed)
        assert.equal(ck.publicAddress, publicAddressCompressed)
      })
    })

    describe('- privateWif', function () {
      it('should return the proper wif 1 ', function () {
        let privateKey = "1184cd2cdd640ca42cfc3a091c51d549b2f016d454b2774019c2b2d2e08529fd";
        let versions = {"private": 176, "public": 48};
        let privateWifCompressed = "T3e2me1BvRs95K7E8eQ8eha9oRPL1g2U6vmjE5px6RjzbUTvKZsf";
        let publicAddressCompressed = "LZyGd5dCPVkVUjA5QbpuUfMNgcmNDLjswH";
        let privateWif = "6uFjYQnot5Gtg3HpP87bp4JUpg4FH1gkkV3RyS7LHBbD9Hpt1na";

        let ck = new CoinKey(Buffer.from(privateKey, 'hex'), versions);
        ck.compressed = false;
        assert.equal(ck.privateWif, privateWif);
        let ckCompressed = new CoinKey(Buffer.from(privateKey, 'hex'), versions)
        assert.equal(ckCompressed.privateWif, privateWifCompressed);
      });

      it('should return the proper wif 2 ', function () {
        let privateKey = "1184cd2cdd640ca42cfc3a091c51d549b2f016d454b2774019c2b2d2e08529fd";
        let versions = {"private": 176, "public": 48};
        let privateWifCompressed = "T3e2me1BvRs95K7E8eQ8eha9oRPL1g2U6vmjE5px6RjzbUTvKZsf";
        let publicAddressCompressed = "LZyGd5dCPVkVUjA5QbpuUfMNgcmNDLjswH";
        let privateWif = "6uFjYQnot5Gtg3HpP87bp4JUpg4FH1gkkV3RyS7LHBbD9Hpt1na";

        let ck = new CoinKey(Buffer.from(privateKey, 'hex'), versions);
        ck.compressed = false;
        assert.equal(ck.privateWif, privateWif);
        let ckCompressed = new CoinKey(Buffer.from(privateKey, 'hex'), versions)
        assert.equal(ckCompressed.privateWif, privateWifCompressed);
      });

      it('should return the proper wif 3 ', function () {
        let privateKey = "1184cd2cdd640ca42cfc3a091c51d549b2f016d454b2774019c2b2d2e08529fd";
        let versions = {"private": 128, "public": "000f1111"};
        let privateWifCompressed = "KwomKti1X3tYJUUMb1TGSM2mrZk1wb1aHisUNHCQXTZq5auC2qc3";
        let publicAddressCompressed = "1337Dy5vh54RZXHryrc3py9JxSvfo6P55JPWLn";
        let privateWif = "5Hx15HFGyep2CfPxsJKe2fXJsCVn5DEiyoeGGF6JZjGbTRnqfiD";

        let ck = new CoinKey(Buffer.from(privateKey, 'hex'), versions);
        ck.compressed = false;
        assert.equal(ck.privateWif, privateWif);
        let ckCompressed = new CoinKey(Buffer.from(privateKey, 'hex'), versions)
        assert.equal(ckCompressed.privateWif, privateWifCompressed);
      });
    });

    describe('- publicAddress', function () {
      it('should return the proper public address 1 ', function () {
        let privateKey = "1184cd2cdd640ca42cfc3a091c51d549b2f016d454b2774019c2b2d2e08529fd";
        let versions = {"private": 128, "public": 0};
        let publicAddressCompressed = "1FkKMsKNJqWSDvTvETqcCeHcUQQ64kSC6s";
        let publicAddress = "16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGS";

        let ck = new CoinKey(Buffer.from(privateKey, 'hex'), versions);
        ck.compressed = false;
        assert.equal(ck.publicAddress, publicAddress);
        let ckCompressed = new CoinKey(Buffer.from(privateKey, 'hex'), versions)
        assert.equal(ckCompressed.publicAddress, publicAddressCompressed);
      });

      it('should return the proper public address 2 ', function () {
        let privateKey = "1184cd2cdd640ca42cfc3a091c51d549b2f016d454b2774019c2b2d2e08529fd";
        let versions = {"private": 176, "public": 48};
        let publicAddressCompressed = "LZyGd5dCPVkVUjA5QbpuUfMNgcmNDLjswH";
        let publicAddress = "LQhgskg1LoWWZsbzCo7GpFffvtCV8Z5GKZ";

        let ck = new CoinKey(Buffer.from(privateKey, 'hex'), versions);
        ck.compressed = false;
        assert.equal(ck.publicAddress, publicAddress);
        let ckCompressed = new CoinKey(Buffer.from(privateKey, 'hex'), versions)
        assert.equal(ckCompressed.publicAddress, publicAddressCompressed);
      });

      it('should return the proper public address 3 ', function () {
        let privateKey = "1184cd2cdd640ca42cfc3a091c51d549b2f016d454b2774019c2b2d2e08529fd";
        let versions = {"private": 158, "public": 30};
        let publicAddressCompressed = "DKtQu8G1cFQikveWy3qAkQTDMY8PKVU18Z";
        let publicAddress = "DAcq9oJpZZAjr56RmF7Y5zmWboZWQ4HAsW";

        let ck = new CoinKey(Buffer.from(privateKey, 'hex'), versions);
        ck.compressed = false;
        assert.equal(ck.publicAddress, publicAddress);
        let ckCompressed = new CoinKey(Buffer.from(privateKey, 'hex'), versions)
        assert.equal(ckCompressed.publicAddress, publicAddressCompressed);
      });
    });

  });
});