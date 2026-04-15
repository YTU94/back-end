let func = require('../sql/func');
let sql = require('../sql/sql.js');

module.exports = {
  getVideoCommendList (req, res) {
    func.connPool(res, sql.queryByPage_Key, ['video_commend', 'video_id', req.body.videoId, req.body.page, req.body.page_size], (err, rows) => {
      if (err) {
        console.error('getVideoCommendList error:', err)
        return func.writeJson(res, 500, 'Internal server error')
      }
      res.json({code: 200, msg: 'ok', data: rows})
    })
  },
  getVideoCommendInfo (req, res) {
    func.connPool(res, sql.queryById, ['video_commend', req.body.id], (err, rows) => {
      if (err) {
        console.error('getVideoCommendInfo error:', err)
        return func.writeJson(res, 500, 'Internal server error')
      }
      res.json({code: 200, msg: 'ok', data: rows})
    })
  },
  getCourseCommendList (req, res) {
    func.connPool(res, sql.queryByPage_Key, ['course_commend', 'course_id', req.body.courseId, req.body.pageNum, req.body.pageSize], (err, rows) => {
      if (err) {
        console.error('getCourseCommendList error:', err)
        return func.writeJson(res, 500, 'Internal server error')
      }
      res.json({code: 200, msg: 'ok', data: rows})
    })
  },
  getCourseCommendInfo (req, res) {
    func.connPool(res, sql.queryById, ['course_commend', req.body.id], (err, rows) => {
      if (err) {
        console.error('getCourseCommendInfo error:', err)
        return func.writeJson(res, 500, 'Internal server error')
      }
      res.json({code: 200, msg: 'ok', data: rows})
    })
  }
}