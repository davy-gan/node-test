var express = require('express');
var router = express.Router();
var path  = require('path');


router.get('/home', function(req, res) {
   res.sendfile(path.join(__dirname,'..','/view/index.html'));
});

router.get('/about', function(req, res) {
   res.sendfile(path.join(__dirname,'..','/view/about.html'));
});

router.get('/detail', function(req, res) {
   res.sendfile(path.join(__dirname,'..','/view/detail.html'));
});

module.exports = router