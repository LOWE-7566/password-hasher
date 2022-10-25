"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_js_1 = __importDefault(require("crypto-js"));
const { stringify } = JSON;
const sha256 = crypto_js_1.default.SHA256;
class PasswordHasher {
    constructor(layers) {
        this.layers = layers;
        if (typeof layers !== "number") {
            throw new Error('password layers need to be a number');
        }
        if (layers < 1) {
            throw new Error("layers must be atleast 1");
        }
    }
    hash(data) {
        return new Promise((r, j) => {
            var __virtual = data;
            var __finalHash;
            const __layer = this.layers;
            try {
                for (var i = 0; i <= __layer; i++) {
                    if (i < __layer) {
                        const __virtualHash = sha256(__virtual);
                        __virtual = __virtualHash.toString();
                    }
                    else {
                        const __virtualFinalHash = sha256(__virtual), __finalHash = __virtualFinalHash.toString();
                        r(__finalHash);
                    }
                }
            }
            catch (e) {
                j(e);
            }
        });
    }
    compare(data, __hash) {
        return new Promise((r, j) => {
            this.hash(data).then((a) => {
                r(a === __hash);
            })
                .catch((e) => j(e));
        });
    }
}
exports.default = PasswordHasher;
