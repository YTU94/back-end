let func = require('../sql/func');
let sql = require('../sql/sql.js');

const checkAgrs = function(args) {
  
}
module.exports = {
  getArticleSorts(req, res) {
    func.connPool(res, sql.queryAll, 'faq_categories', (err, rows) => {
      if (err) {
        console.error('getArticleSorts error:', err)
        return func.writeJson(res, 500, 'Internal server error')
      }
      res.json({
        code: 200,
        msg: 'ok',
        data: rows
      })
    })
  },
  getArticleList(req, res) {
    func.connPool(res, sql.queryByPage_Key, ['faq_articles', 'category_id', req.params.category_id, req.body.page, req.body.page_size], (err, rows) => {
      if (err) {
        console.error('getArticleList error:', err)
        return func.writeJson(res, 500, 'Internal server error')
      }
      res.json({
        code: 200,
        msg: 'ok',
        data: rows
      })
    })
  },
  getArticleInfo(req, res) {
    func.connPool(res, sql.queryByKey, ['article', 'sort_id', req.body.id], (err, rows) => {
      if (err) {
        console.error('getArticleInfo error:', err)
        return func.writeJson(res, 500, 'Internal server error')
      }
      res.json({
        code: 200,
        msg: 'ok',
        data: rows
      })
    })
  },
  //个人博客数据拉取
  getPersonArticleList(req, res) {
    const page = parseInt(req.query.page, 10)
    const pageSize = parseInt(req.query.page_size, 10)
    if (isNaN(page) || isNaN(pageSize) || page < 1 || pageSize < 1) {
      return func.writeJson(res, 400, 'Invalid page or page_size parameter')
    }
    const offset = (page - 1) * pageSize
    const category_id = parseInt(req.query.category_id, 10) || 1

    const querySql = `SELECT wp_posts.*, wp_users.display_name FROM wp_posts, wp_term_relationships, wp_users 
      WHERE wp_term_relationships.term_taxonomy_id = ? 
        AND wp_term_relationships.object_id = wp_posts.ID 
        AND wp_users.ID = wp_posts.post_author
        ORDER BY post_date DESC
      LIMIT ?, ?`
    const countSql = `SELECT count(*) AS count FROM wp_posts, wp_term_relationships, wp_users 
      WHERE wp_term_relationships.term_taxonomy_id = ? 
        AND wp_term_relationships.object_id = wp_posts.ID
        AND wp_users.ID = wp_posts.post_author`

    func.connPool(res, querySql, [category_id, offset, pageSize], (err, rows) => {
      if (err) {
        console.error('getPersonArticleList query error:', err)
        return func.writeJson(res, 500, 'Internal server error')
      }
      func.connPool(res, countSql, [category_id], (err, count) => {
        if (err) {
          console.error('getPersonArticleList count error:', err)
          return func.writeJson(res, 500, 'Internal server error')
        }
        res.json({
          code: 200,
          msg: 'ok',
          total: count[0].count,
          data: rows
        })
      })
    })
  },
  // @ytu 查询分类
  getPersonCategoryList(req, res) {
    const sql = "select * from wp_term_taxonomy, wp_terms WHERE wp_term_taxonomy.term_id = wp_terms.term_id and taxonomy = 'category'"
    func.connPool(res, sql, [], (err, rows) => {
      if (err) {
        console.error('getPersonCategoryList error:', err)
        return func.writeJson(res, 500, 'Internal server error')
      }
      // 删除 ·未分类· 类目
      if (rows && rows.length > 0) {
        rows.splice(0, 1)
      }
      res.json({
        code: 200,
        msg: 'ok',
        data: rows
      })
    })
  },
  // @ytu 获取文章评论
  getArticleComments(req, res) {
    const articleId = parseInt(req.query.articleId, 10)
    if (isNaN(articleId)) {
      return func.writeJson(res, 400, 'Invalid articleId parameter')
    }
    const querySql = 'SELECT * FROM wp_comments WHERE wp_comments.comment_post_ID = ?'
    func.connPool(res, querySql, [articleId], (err, rows) => {
      if (err) {
        console.error('getArticleComments error:', err)
        return func.writeJson(res, 500, 'Internal server error')
      }
      res.json({
        code: 200,
        msg: 'ok', 
        data: rows
      })
    })
  },
  // @ytu 提交评论
  submitArticleComents(req, res) {
    const articleId = parseInt(req.body.articleId, 10)
    const name = (req.body.name || '').trim()
    const email = (req.body.email || '').trim()
    const content = (req.body.content || '').trim()
    if (isNaN(articleId) || !name || !email || !content) {
      return func.writeJson(res, 400, 'Missing required fields: articleId, name, email, content')
    }
    const now = new Date()
    const date = `${now.getFullYear()}-0${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    const sql = 'INSERT INTO wp_comments (comment_post_ID, comment_date, comment_date_gmt, comment_author, comment_author_email, comment_content) VALUES (?, ?, ?, ?, ?, ?)'
    func.connPool(res, sql, [articleId, date, date, name, email, content], (err, rows) => {
      if (err) {
        console.error('submitArticleComents error:', err)
        return func.writeJson(res, 500, 'Internal server error')
      }
      res.json({
        code: 200,
        msg: 'ok',
        data: null
      })
    })
  }
}