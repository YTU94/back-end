var express = require('express');
var router = express.Router();
let index = require('../controls/index');
let course = require('../controls/course')


router.get('/courseList', course.getCouseList)
router.post('/courseInfo', course.getCouseInfo)
router.get('/all', index.getAll)
router.get('/test', index.test)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ytu' });
});
module.exports = router;
