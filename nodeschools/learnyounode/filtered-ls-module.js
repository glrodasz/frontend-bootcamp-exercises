const fs = require('fs');

module.exports = function(dir, ext, callback) {
    fs.readdir(dir, (err, list) => {
        if (err) {
         return callback(err);
        }

        callback(null, list.filter(item => item.indexOf(`.${ext}`) >= 0));
    })
}
