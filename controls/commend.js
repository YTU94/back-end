let func = require('../sql/func');
let sql = require('../sql/sql.js');

module.exports = {
  getVideoCommendList (req, res) {
    func.connPool(res, sql.queryByPage, ['video_commend', req.body.pageNum, re1.page.pageSize], (err, rows) => {
      res.json({code: 200, msg: 'ok', data: rows, err: err})
    })
  },
  getVideoCommendInfo (req, res) {
    func.connPool(res, sql.queryById, ['video_commend', req.body.id], (err, rows) => {
      res.json({code: 200, msg: 'ok', data: rows, err: err})
    })
  },
  getCourseCommendList (req, res) {
    func.connPool(res, sql.queryByPage, ['course_commend', req.body.pageNum, re1.page.pageSize], (err, rows) => {
      res.json({code: 200, msg: 'ok', data: rows, err: err})
    })
  },
  getCourseCommendInfo (req, res) {
    func.connPool(res, sql.queryById, ['course_commend', req.body.id], (err, rows) => {
      res.json({code: 200, msg: 'ok', data: rows, err: err})
    })
  }
}