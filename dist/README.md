# Fntools/password
We usually use bcrypt and bcrypt.js in handling passwords but there are some promblems I have encounter which is speed 
and lightweightness. Fntools/Password has less than 1kb (Minified) therefore it is the way to go if you look for something fast and lightweight, it is built using pure javascript with only one dependency
Fntools/Password is developed to be a tool for password hashing.



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
import PasswordHasher from "@fntools/password";
// OR
const PasswordHasher = require("@fntools/password");

const password = new PasswordHasher(15) // spicify hkow many times password will be hashed
// hash 

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
