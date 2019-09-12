let func = require('../sql/func');
let sql = require('../sql/sql.js');

const checkAgrs = function(args) {
  
}
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
        order BY post_date DESC
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
      // 删除 ·未分类· 类目
      rows.splice(0, 1)
      res.json({
        code: 200,
        msg: 'ok',
        data: rows
      })
    })
  },
  // @ytu 获取文章评论
  getArticleComments(req, res) {
    const articleId = parseInt(req.query.articleId)
    const sql = `SELECT*FROM wp_comments WHERE wp_comments.comment_post_ID=${articleId}`
    func.connPool(res, sql, (err, rows) => {
      res.json({
        code: 200,
        msg: 'ok', 
        data: rows
      })
    })
  },
  // @ytu 提交评论
  submitArticleComents(req, res) {
    const articleId = parseInt(req.body.articleId)
    const name = req.body.name
    const email = req.body.email
    const content = req.body.content
    const now = new Date()
    const date = `${now.getFullYear()}-0${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    const sql = 'INSERT INTO wp_comments (comment_post_ID, comment_date, comment_date_gmt, comment_author, comment_author_email, comment_content) VALUES (?, ?, ?, ?, ?, ?)'
    func.connPool(res, sql, [articleId, date, date, name, email, content], (err, rows) => {
      res.json({
        code: 200,
        msg: 'ok',
        data: null
      })
    })
  }
}