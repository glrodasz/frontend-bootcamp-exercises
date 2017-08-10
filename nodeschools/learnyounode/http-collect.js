const http = require('http');

http.get(process.argv[2], function(response) {
  response.setEncoding('utf8');

  let dataStr = '';

  response.on('data', function(data) {
    dataStr = dataStr + data;
  });

  response.on('end', function() {
    console.log(dataStr.length);
    console.log(dataStr);
  });
});
