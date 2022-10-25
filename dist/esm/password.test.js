import Hasher from "./password.js";
const password = new Hasher(15);
// hash 
password.hash("takataka").then((__hash) => {
    console.log(__hash);
});
password.compare("takataka", "2b77e37044d70a18be0236d5f57036899447bc5efec1f02409ea5a31d9068342").then((v) => {
    console.log(v);
});
