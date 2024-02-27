# a simple password encryption tool 

### install

```bash
# NPM
$ npm i @fntools/password --save

# YARN
$ yarn add @fntools/password

# PNPM 
$ pnpm install @fntools/password
```


### Importing to the project

```javascript
// ESM
import PasswordHasher from "@fntools/password";

// COMMONJS
const { PasswordHasher } = require("@fntools/password");

// invoking hasher
const password = new PasswordHasher(10); // spicify how many times password will be hashed
// or
const password = new passwordHasher.Hasher(10); 

```

### API Documentation

```javascript
const Hasher = new PasswordHasher(layers:number);
//  @param layers is the times a password is going to be hashed 

// ONLY HAS TWO METHODS
  /**
   * Hashes the given password asynchronously or synchronously.
   * @param password The password to hash.
   * @param salt An optional salt.
   * @returns the hash of the password
   */
  [1] Hasher.hash(password: string, salt?: string): string;
    /**
   * Compares a password with its hash to verify if they match.
   * @param password The password to be compared.
   * @param hash The hash of the password to be compared against.
   * @param salt An optional salt.
   * @returns True if the password matches the hash.
   */

 [2] Hasher.compare(password:string, hash:string, salt?:string):boolean;

```


### Primary Usage

```javascript
import PasswordHasher from "@fntools/password";
const password = new PasswordHasher(10);

// try hashing without salt
const hash = password.hash("sample password"); 
// 4993b60183c6a262e1f03d0b8f793e86869c5af82a2b9768d3bd4dd108053bcd


// compare the password
const compared = password.compare("sample password", "4993b60183c6a262e1f03d0b8f793e86869c5af82a2b9768d3bd4dd108053bcd");
// true

// try hashing without with salt
const hashWithSalt = password.hash("sample password", "salt");
// d3b085d6dece7dd0c3fdcd2c56579e840d253b3bc7c11aa3e0483560671eb778


// compare the password not providing salt 
const CompareWithSalt = password.compare("sample password", "d3b085d6dece7dd0c3fdcd2c56579e840d253b3bc7c11aa3e0483560671eb778");
// false

// compare the password with salt  
const compareWithSalt = password.compare("sample password", "d3b085d6dece7dd0c3fdcd2c56579e840d253b3bc7c11aa3e0483560671eb778","salt"); // true

```


