import PasswordHasher from "../";

import { test, describe, expect} from "vitest";

describe("@fntools/password", async () => {
  const Hasher = new PasswordHasher(10);
  expect(Hasher.layers).to.equal(10);
  test("hash and compare password with no salt", async () => {
    const hash = Hasher.hash("myPassword123");
    expect(Hasher.compare("myPassword123", hash)).to.true;
    expect(Hasher.compare("wrongPassword123", hash)).to.false;
  });

  test("hash and compare with salt" , async () => {
    const hash = Hasher.hash("myPassword123", "salt");
    expect(Hasher.compare("myPassword123", hash, "salt")).to.true;
    expect(Hasher.compare("wrongPassword123", hash, "salt")).to.false;

    expect(Hasher.compare("myPassword123", hash, "wrongSalt")).to.false;
    expect(Hasher.compare("wrongPassword123", hash, "wrongSalt")).to.false;
    
  });
})