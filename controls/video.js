let func = require('../sql/func');
let sql = require('../sql/sql.js');

module.exports = {
  getVideoList (req, res) {
    func.connPool(res, sql.queryByKey, ['videos', 'course_id', req.body.courseId], (err, rows) => {
      if (err) {
        console.error('getVideoList error:', err)
        return func.writeJson(res, 500, 'Internal server error')
      }
      res.json({code: 200, msg: 'ok', data: rows})
    })
  },
  getVideoInfo (req, res) {
    func.connPool(res, sql.queryById, ['videos', req.body.id], (err, rows) => {
      if (err) {
        console.error('getVideoInfo error:', err)
        return func.writeJson(res, 500, 'Internal server error')
      }
      if (rows && rows.length === 1) {
        rows = rows[0]
      }
      res.json({code: 200, msg: 'ok', data: rows})
    })
  }
}