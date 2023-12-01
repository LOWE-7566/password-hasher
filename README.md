@fntools/password is a lightweight promise base password hasher alternative to bcrypt and bcrypt.js library

### install



```bash
# NPM
$ npm i @fntools/password --save

# YARN
$ yarn add @fntools/password
```


### HOW TO INCLUDE IN YOUR PROJECT

```javascript
// ESM
import PasswordHasher from "@fntools/password";

// COMMONJS
const { PasswordHasher } = require("@fntools/password");
// or 
const passwordHasher = require("@fntools/password");

// invoking hasher
const password = new PasswordHasher(10); // spicify how many times password will be hashed
// or
const password = new passwordHasher.Hasher(10); 

```

### API Documentation

```javascript
new PasswordHasher(layers:number);
//  @param layers is the times a password is going to be hashed 

// ONLY HAS TWO METHODS
 [1] Hasher.hash(password:string, salt?:string);
 /* 
  * @param password is the password to be hashed
  * @param salt an optional secret key 
  * @returns Promise => string
*/
 [2] Hasher.compare(password:string, hash:string, salt?:string)
 /* 
  * @param password is the password to be compared
  * @param hash is the hash of the password to be compared into
  * @param salt an optional secret key  
   @returns Promise => boolean ;
```


### Primary Usage

```javascript
import PasswordHasher from "@fntools/password";
const password = new PasswordHasher(10);

// try hashing without salt
password.hash("sample password").then((hash) => {
  console.log(hash); // 4993b60183c6a262e1f03d0b8f793e86869c5af82a2b9768d3bd4dd108053bcd
});

// compare the password
password.compare("sample password", "4993b60183c6a262e1f03d0b8f793e86869c5af82a2b9768d3bd4dd108053bcd").then((result) => {
  console.log(result); // true
});

// try hashing without with salt
password.hash("sample password", "salt").then((hash) => {
  console.log(hash); // d3b085d6dece7dd0c3fdcd2c56579e840d253b3bc7c11aa3e0483560671eb778
});

// compare the password not providing salt 
password.compare("sample password", "d3b085d6dece7dd0c3fdcd2c56579e840d253b3bc7c11aa3e0483560671eb778").then((result) => {
  console.log(result); // false // even if the password is correct still return false because no or wrong salt is provided
});

// compare the password with salt  
password.compare("sample password", "d3b085d6dece7dd0c3fdcd2c56579e840d253b3bc7c11aa3e0483560671eb778", "salt").then((result) => {
  console.log(result); // true
});

```


