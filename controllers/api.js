const fs = require('fs');

module.exports.login = function (req, res) {
  if (req.body.email && req.body.password) {
    res.status(200).json({
      status: 'S',
      data: {
        expired_at: '2018-07-21 16:09:50',
        role: 'admin',
        token: 'LOg1QOpZPzVOFZaL-qf6hKqXcwUZcjx5U-sAfindBHsUEweVyj-FGan3vOLCBxW0csi-MTUzMjAwOTc5MQ=='
      }
    })
  } else {
    res.status(200).json({
      status: 'E',
      message: 'Incorrect login or password'
    })
  }
}


module.exports.api = function (req, res) {
  if (req.body.command === 'gettree1') {
    if (Math.floor(Math.random() * 10) < 8) {
      console.log('level1-' + (Math.floor(Math.random() * (4 - 1)) + 1) + '.json')
      fs.readFile('level1-' + (Math.floor(Math.random() * (4 - 1)) + 1) + '.json', 'utf8', function (err, contents) {
        res.status(200).json({
          contents
        });
      });
    } else {
      fs.readFile('error.json', 'utf8', function (err, contents) {
        res.status(200).json({
          contents
        });
      });
    }
  }
}