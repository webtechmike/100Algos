function alternatingSums(a: number[]): number[] {
  let teamA = 0;
  let teamB = 0;

  a.map((t, i) => {
    if(i % 2 === 0) {
      teamA += t;
    } else {
      teamB += t
    }
  });

  console.log(teamA, teamB);

  return [teamA, teamB];
}

console.log(alternatingSums([50, 60, 60, 45, 70]))