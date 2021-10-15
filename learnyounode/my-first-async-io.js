const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, data) {
    const arrayOfStrings = (data.split(/\n/)).length - 1;
    console.log(arrayOfStrings);

    if(err) {
        return console.log(err)
    }
})
