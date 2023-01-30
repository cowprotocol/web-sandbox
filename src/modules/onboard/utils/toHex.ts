import { hexlify, hexStripZeros } from "ethers/lib/utils";

export const toHex = (v: number) => hexStripZeros(hexlify(v));
