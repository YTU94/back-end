let func = require('../sql/func');
let sql = require('../sql/sql.js');

module.exports = {
  getVideoCommendList (req, res) {
    func.connPool(res, sql.queryByPage_Key, ['video_commend', 'video_id', req.body.videoId, req.body.page, req.body.page_size], (err, rows) => {
      res.json({code: 200, msg: 'ok', data: rows, err: err})
    })
  },
  getVideoCommendInfo (req, res) {
    func.connPool(res, sql.queryById, ['video_commend', req.body.id], (err, rows) => {
      res.json({code: 200, msg: 'ok', data: rows, err: err})
    })
  },
  getCourseCommendList (req, res) {
    func.connPool(res, sql.queryByPage_Key, ['course_commend', 'course_id', req.body.courseId, req.body.pageNum, re1.page.pageSize], (err, rows) => {
      res.json({code: 200, msg: 'ok', data: rows, err: err})
    })
  },
  getCourseCommendInfo (req, res) {
    func.connPool(res, sql.queryById, ['course_commend', req.body.id], (err, rows) => {
      res.json({code: 200, msg: 'ok', data: rows, err: err})
    })
  }
}