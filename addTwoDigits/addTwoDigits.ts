function addTwoDigits(n: any): number {
  const nums = n.toString();
  const first = nums[0];
  const last = nums[1];

  return parseInt(first) + parseInt(last);
}

console.log(addTwoDigits(29));
