const fs = require('fs');
const path = require('path');

function readFile(reqUrl, res) {
  const filepath = path.join(__dirname, '..', 'files', `${reqUrl}.json`)
  fs.readFile(filepath, 'utf8', (err, contents) => {
    if (err) {
      console.log('err', err)
    } else {
      res.status(200).json(JSON.parse(contents));
    }
  });
}

function readErrFile(res) {
  const filepath = path.join(__dirname, '..', 'files', 'error.json')
  fs.readFile(filepath, 'utf8', (err, contents) => {
    res.status(200).json(JSON.parse(contents));
  });
}

module.exports.getPage = (req, res) => {
  if (Math.floor(Math.random() * 10) < 8) {
    req.url !== '/' ? readFile(req.url, res) : readFile('/home', res)
  } else {
    readErrFile(res)
  }
}