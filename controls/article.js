let func = require('../sql/func');
let sql = require('../sql/sql.js');

module.exports = {
  getArticleSorts(req, res) {
    func.connPool(res, sql.queryAll, 'faq_categories', (err, rows) => {
      res.json({
        code: 200,
        msg: 'ok',
        data: rows,
        err: err
      })
    })
  },
  getArticleList(req, res) {
    func.connPool(res, sql.queryByPage_Key, ['faq_articles', 'category_id', req.params.category_id, req.body.page, req.body.page_size], (err, rows) => {
      res.json({
        code: 200,
        msg: 'ok',
        data: rows,
        err: err
      })
    })
  },
  getArticleInfo(req, res) {
    func.connPool(res, sql.queryByKey, ['article', 'sort_id', req.body.id], (err, rows) => {
      res.json({
        code: 200,
        msg: 'ok',
        data: rows,
        err: err
      })
    })
  },
  //个人博客数据拉取
  getPersonArticleList(req, res) {
    const offset = parseInt(req.query.page - 1) * parseInt(req.query.page_size)
    const offsetEnd = offset + parseInt(req.query.page_size)
    const category_id = parseInt(req.query.category_id) || 1
    const sql = `select wp_posts.*, wp_users.display_name from wp_posts, wp_term_relationships,wp_users 
      WHERE wp_term_relationships.term_taxonomy_id = ${category_id} 
        AND wp_term_relationships.object_id = wp_posts.ID 
        AND wp_users.ID = wp_posts.post_author
      LIMIT ${offset}, ${offsetEnd}`
    const countSql = `select count(*) as count from wp_posts, wp_term_relationships,wp_users 
      WHERE wp_term_relationships.term_taxonomy_id = ${category_id} 
        AND wp_term_relationships.object_id = wp_posts.ID 
        AND wp_users.ID = wp_posts.post_author`
    func.connPool(res, sql, ['wp_posts', offset, offsetEnd], (err, rows) => {
      func.connPool(res, countSql, 'wp_posts', (err, count) => {
        res.json({
          code: 200,
          msg: 'ok',
          total: count[0].count,
          data: rows,
          err: err
        })
      })
    })
  },
  // @ytu 查询分类
  getPersonCategoryList(req, res) {
    const sql = "select * from wp_term_taxonomy, wp_terms WHERE wp_term_taxonomy.term_id = wp_terms.term_id and taxonomy = 'category'"
    func.connPool(res, sql, (err, rows) => {
      res.json({
        code: 200,
        msg: 'ok',
        data: rows
      })
    })
  }
}