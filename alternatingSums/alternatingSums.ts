function alternatingSums(a: number[]): number[] {
  let teamA = [];
  let teamB = [];
  let result = [];

  a.map((t, i) => {
    if(i % 2 === 0) {
      teamA.push(t)
    } else {
      teamB.push(t)
    }
  });

  console.log(teamA, teamB);

  result.push(teamA.reduce((acc, current) => acc+current))
  result.push(teamB.reduce((acc, current) => acc+current))

  return result;
}

console.log(alternatingSums([50, 60, 60, 45, 70]))