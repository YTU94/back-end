var express = require('express');
var router = express.Router();
let index = require('../controls/index');
let course = require('../controls/course')
let video = require('../controls/video')
let commend = require('../controls/commend')

router.get('/courseList', course.getCouseList)
router.post('/courseInfo', course.getCouseInfo)

router.post('/videoList', video.getVideoList)
router.post('/videoInfo', video.getVideoInfo)

router.post('/course/commendList', commend.getCourseCommendList)
router.post('/course/commendInfo', commend.getCourseCommendInfo)
router.post('/video/commendList', commend.getVideoCommendList)
router.post('/video/commendInfo', commend.getVideoCommendInfo)

router.get('/all', index.getAll)
router.get('/test', index.test)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ytu' });
});
module.exports = router;
