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
  }
}