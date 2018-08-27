# cryptojs # 

a simple js tool for crypto currenty

 ## basic module ##

 * base58
 * eckey

 ## Usage

 ```javascript

 const Base58  = require('cryptojstool').Base58;

 let hex = "61";
 let buf = Buffer.from(hex, 'hex');
 let result = Base58.encode(buf);

 ```

 ## Environment ##

  * node 7.0 or above

 ## How to run ## 
  * git clone https://github.com/jasoncodingnow/cryptojstool.git
  * cd cryptojstool
  * npm install
  * npm test

