var express = require('express');
var router = express.Router();

const magazine_list = [
  {
    id:1,
    url:"http://localhost:6055/magazine2022",
    title: "Magazine 2022"
  },
  {
    id:3,
    url:"http://localhost:6055/magazine2023",
    title: "Magazine 2023"
  },
]

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Radiant E Magazine', magazine_list:magazine_list});
});
router.get('/magazine2022', function (req, res, next) {
  res.render('magazine_details');
});



module.exports = router;
