import crypto from "crypto-js";
const sha256 = crypto.SHA256;

/**
 * Function to generate a hashed password from a given password and salt.
 * @param password The password to be hashed.
 * @param salt An optional salt for hashing the password.
 * @returns The hashed password.
 */
function passwordFromSalt(password: string, salt?: string): string {
  return sha256(password + (salt || "")).toString();
}

/**
 * Lightweight promise-based password hasher alternative to bcrypt.
 */
class PasswordHasher {
  layers: number;

  /**
   * Creates an instance of the PasswordHasher.
   * @param layers The number of times a password is hashed.
   * @throws Error if layers is not a number or is less than 1.
   */
  constructor(layers: number) {
    this.layers = layers;
    if (typeof layers !== "number") {
      throw new Error('password layers need to be a number');
    }
    if (layers < 1) {
      throw new Error("layers must be at least 1");
    }
  }

  /**
   * Hashes the given password asynchronously or synchronously.
   * @param password The password to hash.
   * @param salt An optional salt.
   * @returns the hash of the password
   */
  hash(password: string, salt?: string): string{
    let __finalHash: string;
      let __virtual = passwordFromSalt(password,salt);
      const __layer = this.layers;

      for (let i = 0; i < __layer; i++) {
          const __virtualHash = sha256(__virtual);
          __virtual = __virtualHash.toString();
        }

        const __virtualFinalHash = sha256(__virtual);
        __finalHash = __virtualFinalHash.toString();
        return __finalHash as string;
  }

  /**
   * Compares a password with its hash to verify if they match.
   * @param password The password to be compared.
   * @param hash The hash of the password to be compared against.
   * @param salt An optional salt.
   * @returns True if the password matches the hash.
   */
  compare(password: string, hash: string, salt?: string): boolean {
    const valid = this.hash(password, salt) === hash;
    return valid;
  }
}

export default PasswordHasher;
