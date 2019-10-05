function alphabeticShift(inputString: string): string {
  // store alphabet in a string
  // initialize an empty string to store result of shifting letters
  // iterate inputString and append output string with next value in alphabet string
  // return output string
  const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
  let output: string = '';

  inputString.split('').forEach((letter, index) => {
    let location = alphabet.indexOf(letter);
    if (location === 25) {
      output = output.concat(alphabet[0]);
    } else {
      output = output.concat(alphabet[location+1]);
    }

    console.log(alphabet[location])
    console.log(output)

  });

  return output;
}

console.log(alphabeticShift('crazy'));