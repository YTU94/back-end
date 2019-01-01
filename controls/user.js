let func = require('../sql/func');
let sql = require('../sql/sql.js');

module.exports = {
  login (req, res) {
    func.connPool(res, sql.queryByPage, ['course', parseInt(req.query.page), parseInt(req.query.page_size)], (err, rows) => {
      res.json({code: 200, msg: 'ok', data: rows, err: err})
    })
  }
}