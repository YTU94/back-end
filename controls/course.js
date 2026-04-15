let func = require('../sql/func');
let sql = require('../sql/sql.js');

module.exports = {
  getCouseList (req, res) {
    const page = parseInt(req.query.page, 10)
    const pageSize = parseInt(req.query.page_size, 10)
    if (isNaN(page) || isNaN(pageSize) || page < 1 || pageSize < 1) {
      return func.writeJson(res, 400, 'Invalid page or page_size parameter')
    }
    func.connPool(res, sql.queryByPage, ['course', page, pageSize], (err, rows) => {
      if (err) {
        console.error('getCouseList error:', err)
        return func.writeJson(res, 500, 'Internal server error')
      }
      res.json({code: 200, msg: 'ok', data: rows})
    })
  },
  getCouseInfo (req, res) {
    func.connPool(res, sql.queryById, ['course_info', req.body.id], (err, rows) => {
      if (err) {
        console.error('getCouseInfo error:', err)
        return func.writeJson(res, 500, 'Internal server error')
      }
      res.json({code: 200, msg: 'ok', data: rows})
    })
  }
}