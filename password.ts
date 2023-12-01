import crypto from "crypto-js";
const sha256 = crypto.SHA256;

function passwordFromSalt(password: string, salt?: string) {
  return sha256(password + salt || "").toString();
}

class PasswordHasher {
  layers: number
  /**
   * @description Password hasher instance
   * @param layers is the times a password is going to be hashed 
   */
  constructor(layers:number){
    this.layers = layers;
    if(typeof layers !== "number" ){
      throw new Error('password layers need to be a number')
    } 
    if(layers < 1){
      throw new Error("layers must be atleast 1");
    }
  }


  /**
    * @description method for hashing password
    * @param password is the password to be hashed
    * @param salt an optional secret key 
    * @returns {Promise<string>}
   */
  hash(password:string, salt?:string):Promise<string>{
    return new Promise((r,j) => {
      var __virtual = passwordFromSalt(password, salt);
      const __layer = this.layers;
      try {
        for(var i =0; i <= __layer; i++){
          if(i < __layer) {
            const __virtualHash = sha256(__virtual);
            __virtual = __virtualHash.toString();
          } else {
            const __virtualFinalHash = sha256(__virtual), __finalHash = __virtualFinalHash.toString();
            r(__finalHash);
          }
        }
      } catch(e:any){ j(e)}
    })
  }
  
  /**
  * @description a method used to compare if the hash matched the password
  * @param password is the password to be compared
  * @param hash is the hash of the password to be compared into
  * @param salt an optional secret key 
  * @return { Promise<boolean> } if the password match
   */
  compare(password:string,hash:string, salt?:string):Promise<boolean>{
    return new Promise((r,j) => {
      this.hash(password, salt).then((a:any) => {
        r(a === hash)})
        .catch((e:any) => j(e))
    })
  }
}

/**
 * @alias Hasher
 */
export default PasswordHasher;