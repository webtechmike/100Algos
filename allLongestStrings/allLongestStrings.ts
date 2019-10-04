function allLongestStrings(inputArray: string[]): string[] {
  // keep track of index of longest string
  // iterate input if next string is longer, then replace longestStringIndex
  // filter input by strings with length matching longest string

  let longestIndex = 0;

  inputArray.forEach((input, index) => {
    if(input.length > inputArray[longestIndex].length) {
      longestIndex = index;
    }
  });

  return inputArray.filter((str) => str.length === inputArray[longestIndex].length);
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["affdba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["affdba", "aa", "ad", "vcd", "abdfaaa"]));
console.log(allLongestStrings(["aba", "afdaa", "affffd", "vfffcd", "aba"]));
console.log(allLongestStrings(["aba", "aa", "ad", "vcdd", "adba"]));
