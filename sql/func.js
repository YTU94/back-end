const mysql = require('mysql');
const db = require('../config/db');
const pool  = mysql.createPool(db);

module.exports = {
  connPool (res ,sql, val, cb) {
    pool.getConnection((err, conn) => {
      if(err) console.log(err)
      conn.query(sql, val, (err, response) => {
        console.log('连接池的 response', response)
        if(err) console.log(err)
        cb(err, response)
        conn.release()
      })
    })
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