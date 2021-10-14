const arrayBabySteps = process.argv;

let sum = arrayBabySteps.slice(2).reduce((prev, curr) => Number(prev) + Number(curr));

console.log(sum);