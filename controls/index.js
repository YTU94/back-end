let func = require('../sql/func');

module.exports = {
  getAll (req, res, next) {
    console.log(req.query, req.params)
    func.connPool(res, `SELECT * FROM ?? limit ${req.query.page}, ${req.query.pageSize}`, 'wp_posts', (err, rows) => {
      res.json({code: 200, msg: 'ok', data: rows, err: err})      
    })  
  },
  test(req, res, next) {
    func.connPool(res, 'SELECT * FROM `wp_posts` WHERE id > 1', '', rows => {
      res.json({code: 200, msg: 'ok', data: rows})
    })
  }
}
