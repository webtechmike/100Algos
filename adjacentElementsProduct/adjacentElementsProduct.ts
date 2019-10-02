function adjacentElementsProduct(inputArray: number[]): number {
  // find the largest integer
  // find the larger of the two neighbors
  // multiply by the larger neighbor

  let largestInt = inputArray.reduce((a, b) => a > b ? a : b);

  const largestIntIndex = inputArray.indexOf(largestInt);

  const leftNeighbor = inputArray[largestIntIndex-1];
  const rightNeighbor = inputArray[largestIntIndex+1];

  if(leftNeighbor > rightNeighbor) {
    return largestInt * leftNeighbor;
  } else {
    return largestInt * rightNeighbor;
  }
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));