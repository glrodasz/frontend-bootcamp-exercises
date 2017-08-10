const filteredLs = require('./filtered-ls-module');

filteredLs(process.argv[2], process.argv[3], (err, list) => {
    if (err) {
      return console.log(err);
    }

    list.map(item => { console.log(item) });
});
