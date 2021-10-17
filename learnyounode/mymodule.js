const fs = require('fs');
const path = require('path');
const ext = '.' + process.argv[3]

module.exports = function (dir, filter, callback) { 

    fs.readdir(dir, function (err, list) {
        if(err) {
            return callback(err);
        }
        list = list.filter(function (file) {
            return path.extname(file) === '.' + filter 
        })
        callback(null, list)
    })
}