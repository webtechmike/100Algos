function alphabetSubsequence(s: string): boolean {
  const chars: string[] = s.split('');
  const charValues: number[] = [];
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  // chars = chars.filter(char => alphabet.indexOf(char) !== -1);
  chars.forEach((char: string) => {    
    charValues.push(char.charCodeAt(0));
  });

  console.log(chars.filter(char => alphabet.indexOf(char) !== -1));
  console.log(charValues);

  if(new Set(charValues).size !== charValues.length) {
    return false;
  }

  for(let i = 0; i < charValues.length - 1; i++) {
    if(charValues[i] >= charValues[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('cae'))
console.log(alphabetSubsequence('abbxz'))
console.log(alphabetSubsequence('?bxz')) // filter out special chars or return false here too ?
console.log(alphabetSubsequence('bxz?'))
