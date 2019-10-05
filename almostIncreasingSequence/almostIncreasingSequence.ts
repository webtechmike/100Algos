function almostIncreasingSequence(sequence: number[]): boolean {
  // iterate the sequence 
  // if any number is less than the previous number set count it
  // if it happens again count it again and return false

  let count = 0;

  for(let i = 0; i < sequence.length; i++) {
    if(sequence[i] <= sequence[i - 1]) {
      count += 1;
      if(sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
        return false;
      }
    }
  }

  return count <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 4])) 
console.log(almostIncreasingSequence([1, 3, 2])) 
console.log(almostIncreasingSequence([1, 3, 2, 3])) 
console.log(almostIncreasingSequence([1, 3, 2, 4, 5, 6, 5])) 
console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 4, 5, 2, 1])) 