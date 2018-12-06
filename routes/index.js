var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
let index = require('../controls/index');
let func = require('../sql/func');
var pool  = mysql.createPool( {
  connectionLimit : 50,
  host            : 'localhost',
  user            : 'root',
  password    : '261011',
  database     : 'blog',
 multipleStatements : true  //是否允许执行多条sql语句
});


router.get('/a', function(req, res, next) {
  pool.getConnection((err, conn) => {
    if(err) console.log(err)
    conn.query('SELECT 1 + 1 AS solution', '', (err, response) => {
      res.json({code: 200, msg: 'ok', goods: response});
      console.log('asdsad', response)
      conn.release()
      if(err) return
    })
  })
  // res.render('index', { title: 'Express' });
});

router.get('/all', index.getAll)
router.get('/test', index.test)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
