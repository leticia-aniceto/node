// import { readFileSync } from 'fs';

const fs = require('fs');

const buf = fs.readFileSync(process.argv[2]);
// return a buffer object that can be converted to string with
const str = buf.toString();
const newLine = '\n';
const arrayOfStrings = str.split(newLine);
console.log(arrayOfStrings.length - 1)



//refatorando
// const fs = require('fs');

// const buf = fs.readFileSync(process.argv[2], 'utf8').split('\n');

// console.log(buf.length - 1);