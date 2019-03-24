let func = require('../sql/func');
let sql = require('../sql/sql.js');

module.exports = {
  getArticleSorts (req, res) {
    func.connPool(res, sql.queryAll, 'faq_categories', (err, rows) => {
      res.json({code: 200, msg: 'ok', data: rows, err: err})
    })
  },
  getArticleList (req, res) {
    func.connPool(res, sql.queryByPage_Key, ['faq_articles', 'category_id', req.params.category_id, req.body.page, req.body.page_size], (err, rows) => {
      res.json({code: 200, msg: 'ok', data: rows, err: err})
    })
  },
  getArticleInfo (req, res) {
    func.connPool(res, sql.queryByKey, ['article', 'sort_id', req.body.id], (err, rows) => {
      res.json({code: 200, msg: 'ok', data: rows, err: err})
    })
  },
  //个人博客数据拉取
  getPersonArticleList (req, res) {
    const offset = parseInt(req.query.page - 1) * parseInt(req.query.page_size) 
    const offsetEnd = offset + parseInt(req.query.page_size)
    func.connPool(res, sql.queryByPage, ['wp_posts', offset, offsetEnd], (err, rows) => {
      res.json({code: 200, msg: 'ok', data: rows, err: err})
    })
  },
}