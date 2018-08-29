# cryptojs # 

a simple js tool for crypto currenty

 ## basic module ##

 * base58
 * eckey
 * coinkey

 ## Usage

 ```
   npm install cryptojstool -s
 ```

 ```javascript

  // Base58

  const Base58  = require('cryptojstool').Base58;

  let hex = "61";
  let buf = Buffer.from(hex, 'hex');
  let result = Base58.encode(buf); //"2g"

  let toHex = Base58.decode("2g"); //  "61"


  // Base58Check
  const Base58Check  = require('cryptojstool').Base58Check;
 
  let string = "1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62i";
  let payload = "0065a16059864a2fdbc7c99a4723a8395bc6f188eb";

  let actual = Base58Check.decode(string).toString('hex');
  // actual: "0065a16059864a2fdbc7c99a4723a8395bc6f188eb"

  let buf = Buffer.from(payload, 'hex');
  let a = Base58Check.encode(buf);
  // a: "1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62i"



  // CoinKey
  const CoinKey  = require('cryptojstool').CoinKey;

  let privateKey = secureRandom.randomBuffer(32)
  let ck = new CoinKey(privateKey);

  privateKey = "1184cd2cdd640ca42cfc3a091c51d549b2f016d454b2774019c2b2d2e08529fd";
  let versions = {"private": 176, "public": 48};
  let ck1 = new CoinKey(Buffer.from(privateKey, 'hex'), versions);
  ck1.compressed = false;

  let privateWif = "5Hx15HFGyep2CfPxsJKe2fXJsCVn5DEiyoeGGF6JZjGbTRnqfiD";
  let ck2 = CoinKey.fromWif(privateWif, versions);
 ```

 ## Environment ##

  * node 7.0 or above

 ## How to run ## 
  * git clone https://github.com/jasoncodingnow/cryptojstool.git
  * cd cryptojstool
  * npm install
  * npm test

