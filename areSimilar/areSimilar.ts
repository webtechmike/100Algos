function areSimilar(a: number[], b: number[]): boolean {
  // a.length !== b.length ? false : //do stuff
  // check for each value in first array in the second
  // if any do not exist return false
  // if they all exist proceed

  let mistakes: number = 0;

  if (a.length !== b.length) {
    return false;
  } else {
    console.log(mistakes);

    a.forEach((num, index) => {
      if (b.indexOf(num) === -1) {
        return false;
      } else {
        // check if order of elements is the same
        // if 2 or more elements are out of order return false else true
        if (num !== b[index]) {
          mistakes += 1;
        }
      }
    });
    
    if (mistakes >= 2) {
      console.log(mistakes);
      return false;
    } else {
      return true;
    }
  }
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([1, 2, 3], [1, 2, 3, 4]));
console.log(areSimilar([1, 2, 3, 5], [1, 2, 3, 4]));
