var express = require('express');
var router = express.Router();

const base_url = "http://116.68.200.97:6055"

const magazine_list = [
  {
    id:1,
    url:`${base_url}/magazine2022_february`,
    thumb:"images/2022_1/Cronical-11-01.jpg",
    title: "Chronicle",
    sub_title: "February- April 2022"
  },
  {
    id:3,
    url:`${base_url}/magazine2022_august`,
    thumb:"images/2022_2/CHRONICAL-12-01.jpg",
    title: "Chronicle",
    sub_title: "May - August 2022"
  },
]

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Radiant Chronicle', magazine_list:magazine_list});
});
router.get('/magazine2022_february', function (req, res, next) {
  res.render('magazine_details_february');
});
router.get('/magazine2022_august', function (req, res, next) {
  res.render('magazine_details_august');
});



module.exports = router;
