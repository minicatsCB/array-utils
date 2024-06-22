import * as crypto from "node:crypto"

export function generateRandomId(): string {
    return crypto.randomBytes(8).toString("hex");
}