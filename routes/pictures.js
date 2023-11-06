var express = require('express');
var router = express.Router();
const fs = require('fs');
var path = require('path');

/* GET pictures listing. */
router.get('/', function(req, res, next) {
  const pictures = fs.readdirSync(path.join(__dirname, '../pictures/'));
  res.render('pictures', { pictures: pictures});
});

//display a file from the request in the logs and save in folder
router.post('/', function(req, res, next) {
    const file = req.files.file;
    fs.writeFileSync(path.join(__dirname, '../pictures/', file.name), file.data);
    console.log(req.files);
    res.end();
  });

module.exports = router;