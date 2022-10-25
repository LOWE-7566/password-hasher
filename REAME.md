# PasswordHasher 
We usually use bcrypt and bcrypt.js in handling passwords but there are some promblems I have encounter which is speed 
and lightweightness so PasswordHasher is the way to go, it is built using pure javascript and only 1 file with only one dependencies
PasswordHasher is developed to be a tool for freenet wallet 


### install 
### NPM 
```bash 
$ npm i @fntools/password-hasher --save 
```
### YARN 
```bash 
$ yarn add @fntools/password-hasher
```

### HOW TO INCLUDE IN YOUR PROJECT
```javascript 
// ESM 
import PasswordHasher from "@fntools/password-hasher";

// COMMONJS 
const password-hasher = require("@fntools/password-hasher");

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
import PasswordHasher from "@fntools/password-hasher";
  const password = new PasswordHasher(15);

// hash 
password.hash("takataka").then((__hash:any) => {
  console.log(__hash)})

password.compare("takataka","2b77e37044d70a18be0236d5f57036899447bc5efec1f02409ea5a31d9068342").then((v:any) => {
  console.log(v);
} )

// 2b77e37044d70a18be0236d5f57036899447bc5efec1f02409ea5a31d9068342
// true
```

### Developed By 
### [Lowe Andaya](https://github.com/lowecainandaya)
