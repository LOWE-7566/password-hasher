import crypto from "crypto-js";
const {stringify} = JSON;
const sha256 = crypto.SHA256;
class PasswordHasher {
  layers:number
  constructor(layers:number){
    this.layers = layers;
    if(typeof layers !== "number" ){
      throw new Error('password layers need to be a number')
    } 
    if(layers < 1){
      throw new Error("layers must be atleast 1");
    }
  }
  hash(data:any){
    return new Promise((r,j) => {
      var __virtual = data;
      var __finalHash;
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
  
  compare(data:string,__hash:string){
    return new Promise((r,j) => {
      this.hash(data).then((a:any) => {
        r(a === __hash)})
        .catch((e:any) => j(e))
    })
  }
}

export default PasswordHasher;