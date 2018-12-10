let func = require('../sql/func');

module.exports = {
  getCouseList (req, res) {
    func.connPool(res, `SELECT * FROM ?? limit ${req.query.page}, ${req.query.pageSize}`, 'course', (err, rows) => {
      res.json({code: 200, msg: 'ok', data: rows, err: err})
    })
  },
  getCouseInfo (req, res) {
    func.connPool(res, `SELECT * FROM ?? WHERE id = ${req.body.id}`, 'course_info', (err, rows) => {
      res.json({code: 200, msg: 'ok', data: rows, err: err})
    })
  },
  test(req, res) {
    func.connPool(res, 'SELECT * FROM `wp_posts` WHERE id > 1', '', rows => {
      res.json({code: 200, msg: 'ok', data: rows})
    })
  }
}