const babySteps = process.argv;

let sum = babySteps.slice(2).reduce((prev, curr) => Number(prev) + Number(curr));

console.log(sum);

