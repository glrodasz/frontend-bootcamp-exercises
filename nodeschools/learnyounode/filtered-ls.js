const fs = require('fs');

fs.readdir(process.argv[2], (err, list)=>{
    list
    .filter(item => item.indexOf('.') >= 0)
    .filter(item => item.indexOf(process.argv[3]) >= 0)
    .map(item => console.log(item));
})
