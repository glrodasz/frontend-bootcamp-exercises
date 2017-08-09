const fs = require('fs');

const content = fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }

    console.log(data.split('\n').length -1);
})
