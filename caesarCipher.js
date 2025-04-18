function caesarCipher(string, shiftFactor) {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char.match(/[a-z]/i)) {
      const code = string.charCodeAt(i);
      let shiftedCode;

      if (code >= 65 && code <= 90) {
        shiftedCode = ((code - 65 + shiftFactor) % 26) + 65;
      } else if (code >= 97 && code <= 122) {
        shiftedCode = ((code - 97 + shiftFactor) % 26) + 97;
      }
      result += String.fromCharCode(shiftedCode);
    } else {
      result += char;
    }
  }
  return result;
}

module.exports = caesarCipher;
