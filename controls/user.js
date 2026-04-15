let func = require('../sql/func');
let sql = require('../sql/sql.js');

module.exports = {
  login (req, res) {
    func.connPool(res, sql.queryByPage, ['course', parseInt(req.query.page, 10), parseInt(req.query.page_size, 10)], (err, rows) => {
      if (err) {
        console.error('login error:', err)
        return func.writeJson(res, 500, 'Internal server error')
      }
      res.json({code: 200, msg: 'ok', data: rows})
    })
  }
}