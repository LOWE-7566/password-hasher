/**
 * Lightweight promise-based password hasher alternative to bcrypt.
 */
declare class PasswordHasher {
    layers: number;
    /**
     * Creates an instance of the PasswordHasher.
     * @param layers The number of times a password is hashed.
     * @throws Error if layers is not a number or is less than 1.
     */
    constructor(layers: number);
    /**
     * Hashes the given password asynchronously or synchronously.
     * @param password The password to hash.
     * @param salt An optional salt.
     * @returns the hash of the password
     */
    hash(password: string, salt?: string): string;
    /**
     * Compares a password with its hash to verify if they match.
     * @param password The password to be compared.
     * @param hash The hash of the password to be compared against.
     * @param salt An optional salt.
     * @returns True if the password matches the hash.
     */
    compare(password: string, hash: string, salt?: string): boolean;
}
export default PasswordHasher;
//# sourceMappingURL=password.d.ts.map