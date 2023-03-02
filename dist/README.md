# Fntools/password
We usually use bcrypt and bcrypt.js in handling passwords but there are some promblems I have encounter which is speed 
and lightweightness so PasswordHasher is the way to go, it is built using pure javascript and only 1 file with only one dependencies
PasswordHasher is developed to be a tool for freenet wallet 


### install 
### NPM 
```bash 
$ npm i @fntools/password --save 
```
### YARN 
```bash 
$ yarn add @fntools/password
```

### HOW TO INCLUDE IN YOUR PROJECT
```javascript 
// ESM 
import PasswordHasher from "@fntools/password";

// COMMONJS 
const password-hasher = require("@fntools/password");

```

### USAGE 
```javascript 
const Hasher = new PasswordHasher(layers:number);
/* layers is the times a password is going to be hashed */

// ONLY HAS TWO METHODS 
 [1] Hasher.hash(password);
 /* password => is a string password which is going to return promise  
    @returns Promise => hash string
   */
 [2] Hasher.compare(password,hash)
 /* password => a string which is a password 
   hash => is a hash string from hashing a password 
   @returns Promise => boolean ;
```

### EXAMPLE 

``` javascript 
import password from "@fntools/password";
// OR
const password = require("@fntools/password");
// hash 
test("working as intended", () => {
password.hash("sample password").then((__hash) => {
    console.log(__hash);
});
password.compare("sample password", "bf5c795f2ec3c33c558da0f83b81afd4e58525b6a8a6f9a3a7360e958f8e2c74").then((result) => {
    console.log(result);
});



// bf5c795f2ec3c33c558da0f83b81afd4e58525b6a8a6f9a3a7360e958f8e2c74
// true
```

### Developed By 
### [Lowe Andaya](https://github.com/lowecainandaya)
