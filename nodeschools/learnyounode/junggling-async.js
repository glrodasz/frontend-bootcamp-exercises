const http = require('http');

let reponsesArray = [];

function request(url, i, callback) {
  http.get(url, response => {
    response.setEncoding('utf8');

    let dataStr = '';

    response.on('data', data => {
      dataStr = dataStr + data;
    });

    response.on('end', () => {
      reponsesArray[i] = dataStr;
      reponsesArray.filter(item => item).length >= 3 && callback();
    })
  });
}

function printResponse() {
  reponsesArray.map(item => console.log(item));
}

request(process.argv[2], 0, printResponse);
request(process.argv[3], 1, printResponse);
request(process.argv[4], 2, printResponse);
