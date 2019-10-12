function arrayChange(inputArray: number[]): number {
  // initialize count
  // iterate inputArray and increment count until current value = previous value + 1
  // return count
 
  let count: number = 0;
  
  inputArray.forEach((num, index) => {
    let prevNum: number = inputArray[index - 1];
    if(index != 0) {
      if(num <= prevNum) {
        for(let i = num; i <= prevNum; i++) {
          inputArray[index] += 1;
          count += 1;
        }
      }
    }
  });

  console.log(inputArray);

  return count;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([1, 2, 3]));
console.log(arrayChange([1, 2, 1]));
console.log(arrayChange([10, 1, 3]));
