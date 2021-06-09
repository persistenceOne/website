const ALPHABET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';

var ALPHABET_MAP = {};
for (let z = 0; z < ALPHABET.length; z++) {
    let x = ALPHABET.charAt(z)
    ALPHABET_MAP[x] = z
}

function polymodStep (pre) {
    let b = pre >> 25
    return ((pre & 0x1FFFFFF) << 5) ^
        (-((b >> 0) & 1) & 0x3b6a57b2) ^
        (-((b >> 1) & 1) & 0x26508e6d) ^
        (-((b >> 2) & 1) & 0x1ea119fa) ^
        (-((b >> 3) & 1) & 0x3d4233dd) ^
        (-((b >> 4) & 1) & 0x2a1462b3)
}

function prefixChk (prefix) {
    let chk = 1
    for (let i = 0; i < prefix.length; ++i) {
        let c = prefix.charCodeAt(i)
        if (c < 33 || c > 126) return false;

        chk = polymodStep(chk) ^ (c >> 5)
    }
    chk = polymodStep(chk)

    for (let i = 0; i < prefix.length; ++i) {
        let v = prefix.charCodeAt(i)
        chk = polymodStep(chk) ^ (v & 0x1f)
    }
    return chk
}

export function checkbech32 (str) {
    let LIMIT = 90;
    if (str.length < 8) return false;
    if (str.length > LIMIT) return false;


    let split = str.lastIndexOf('1')
    if (split === -1) return false;
    if (split === 0) return false;

    let prefix = str.slice(0, split)
    let wordChars = str.slice(split + 1)
    if (wordChars.length < 6) return false;

    let chk = prefixChk(prefix);
    if (typeof chk === 'string') return false;

    let words = []
    for (let i = 0; i < wordChars.length; ++i) {
        let c = wordChars.charAt(i)
        let v = ALPHABET_MAP[c]
        if (v === undefined) return false;
        chk = polymodStep(chk) ^ v

        // not in the checksum?
        if (i + 6 >= wordChars.length) continue
        words.push(v)
    }

    if (chk !== 1) return false;
    return true;
}