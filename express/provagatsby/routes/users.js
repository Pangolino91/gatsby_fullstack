var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const bodyparse = require('body-parser');

var mysqlconnection = mysql.createConnection({
  host     : 'gator3304.hostgator.com',
  user     : 'pangolin_enrico',
  password : '*****',
  database : 'pangolin_database'
});

mysqlconnection.connect(function(err) {
  if (err) {
  console.log(err)
  }
  else {
  console.log(`You are now connected` )
  }
})

router.get('/', (req, res) => {
  mysqlconnection.query('SELECT * FROM contact_requests', (err, rows, fields) => {
      if(!err) {
          res.send(JSON.stringify(rows, undefined, 2));
      }
      else {
          console.log(err)
      }        
  })
})


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.json([
//     { id: 1, username: 'ciaooo'},
//     { id: 2, username: 'maestro'},
//   ])
// });

module.exports = router;
