declare class PasswordHasher {
    layers: number;
    /**
     * @description Password hasher instance
     * @param layers is the times a password is going to be hashed
     */
    constructor(layers: number);
    /**
      * @description method for hashing password
      * @param password is the password to be hashed
      * @param salt an optional secret key
      * @returns {Promise<string>}
     */
    hash(password: string, salt?: string): Promise<string>;
    /**
    * @description a method used to compare if the hash matched the password
    * @param password is the password to be compared
    * @param hash is the hash of the password to be compared into
    * @param salt an optional secret key
    * @return { Promise<boolean> } if the password match
     */
    compare(password: string, hash: string, salt?: string): Promise<boolean>;
}
/**
 * @alias Hasher
 */
export default PasswordHasher;
//# sourceMappingURL=password.d.ts.map