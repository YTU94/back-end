var express = require('express')
var router = express.Router()
let user = require('../controls/user')
let article = require('../controls/article')
let course = require('../controls/course')
let video = require('../controls/video')
let commend = require('../controls/commend')

// user
router.post('/oauth/token', user.login)

// article
router.get('/api/v1/faq/categories', article.getArticleSorts)
router.post('/api/v1/faq/category/:category_id/articles', article.getArticleList)
router.post('/getArticleInfo', article.getArticleInfo)

// course
router.get('/courseList', course.getCouseList)
router.post('/courseInfo', course.getCouseInfo)

// video
router.post('/videoList', video.getVideoList)
router.post('/videoInfo', video.getVideoInfo)

// commnend
router.post('/course/commendList', commend.getCourseCommendList)
router.post('/course/commendInfo', commend.getCourseCommendInfo)
router.post('/video/commendList', commend.getVideoCommendList)
router.post('/video/commendInfo', commend.getVideoCommendInfo)

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Ytu'
  })
})

// my article
router.get('/api/v1/ytu/articles', article.getPersonArticleList)
router.get('/api/v1/ytu/category', article.getPersonCategoryList)
router.get('/api/v1/ytu/articleComments', article.getArticleComments)
router.post('/api/v1/ytu/submitArticleComents', article.submitArticleComents)
module.exports = router