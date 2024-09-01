async function permittedCharacters() {
    let permitted = [];

    if (process.env.UPPERCASE_LETTERS === "true") {
        permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
      }
      if (process.env.LOWERCASE_LETTERS === "true") {
        permitted.push(..."abcdefghijklmnopqrstuvwxyz".split(""));
      }
      if (process.env.NUMBERS === "true") {
        permitted.push(..."0123456789".split(""));
      }
      if (process.env.SPECIAL_CHARACTERS === "true") {
        permitted.push(..."!@#$%^&*()_+-={}:<>?/,.");
      }

      return permitted;
}

export default permittedCharacters;