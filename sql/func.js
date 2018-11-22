const mysql = require('mysql');
// const db = require('../config/db');
var pool  = mysql.createPool( {
  connectionLimit : 50,
  host            : 'localhost',
  user            : 'root',
  password    : '261011',
  database     : 'test',
 multipleStatements : true  //是否允许执行多条sql语句
});

module.exports = {
  connPool (sql, val, cb) {
    debugger
    pool.getConnection((err, conn) => {
        let q = conn.query(sql, val, (err, rows) => {
            if (err) {
                console.log(err);
            }
            console.log('asdsad', rows)
            cb(err, rows);
            conn.release();
        });
    });
  },
  // json格式
  writeJson(res, code = 200, msg = 'ok', data = null) {
    let obj = {code, msg, data};
    if (!data) {
        delete obj.data;
    }
    res.send(obj);
  }
}