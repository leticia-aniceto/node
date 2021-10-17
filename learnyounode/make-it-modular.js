const moduleFunction = require('./mymodule');
const dirName = process.argv[2];
const filterStr = process.argv[3];

moduleFunction(dirName, filterStr, function (err, list) {
    if (err) throw err;

    list.forEach(function (file) {
        console.log(file);
    })
})

