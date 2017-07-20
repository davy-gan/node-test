var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path  = require('path');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/login', function (req, res) {
   res.sendFile( path.join(__dirname,'..','/view/login.html'));
})

router.post('/login', urlencodedParser, function (req, res) {

   var response = {
       "username":req.body.username,
       "password":req.body.password
   };
   if(req.body.username && req.body.password) {
     res.send(JSON.stringify(response));
   }else {
      res.sendFile( path.join(__dirname,'..','/view/login.html'));
   }
})

module.exports = router;