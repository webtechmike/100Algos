function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
  const yourMaxStrength = yourLeft + yourRight;
  const friendsMaxStrength = friendsLeft + friendsRight;

  return yourMaxStrength > friendsMaxStrength || friendsMaxStrength > yourMaxStrength ? false : true;
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
