let func = require('../sql/func');
let sql = require('../sql/sql.js');

module.exports = {
  getVideoList (req, res) {
    func.connPool(res, 'SELECT * FROM ?? WHERE courseId=?', ['videos', req.body.courseId], (err, rows) => {
      res.json({code: 200, msg: 'ok', data: rows, err: err})
    })
  },
  getVideoInfo (req, res) {
    func.connPool(res, sql.queryById, ['videos', req.body.id], (err, rows) => {
      if (rows && rows.length === 1) {
        rows = rows[0]
      }
      res.json({code: 200, msg: 'ok', data: rows, err: err})
    })
  }
}