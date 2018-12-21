const fs = require('fs');

module.exports.login = function (req, res) {
  if (req.body.email && req.body.password) {
    res.status(200).json({
        expired_at: '2018-07-21 16:09:50',
        role: 'admin',
        token: 'randomStringToken=='
    })
  } else {
    res.status(401).json({
      message: 'Incorrect login or password'
    })
  }
}

module.exports.api = function (req, res) {
  if (req.body.command === 'gettree1') {
    if (Math.floor(Math.random() * 10) < 8) {
      console.log('files/level1-' + (Math.floor(Math.random() * (4 - 1)) + 1) + '.txt')
      fs.readFile('files/level1-' + (Math.floor(Math.random() * (4 - 1)) + 1) + '.txt', 'utf8', function (err, contents) {
        res.status(200).json(JSON.parse(contents));
      });
    } else {
      fs.readFile('files/error.txt', 'utf8', function (err, contents) {
        res.status(200).json(JSON.parse(contents));
      });
    }
  }
}