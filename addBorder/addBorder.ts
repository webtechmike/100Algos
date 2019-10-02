function addBorder(picture: string[]): string[] {
  const count = picture[0].length + 2;
  let newPic = [];
  let firstLast = "*".repeat(count);

  newPic.push(firstLast);
  picture.forEach(s => newPic.push(`*${s}*`));
  newPic.push(firstLast);

  return newPic;
}

console.log(addBorder(["abc", "ded"]));