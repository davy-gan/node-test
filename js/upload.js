
var path = require('path');
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

module.exports = function (app) {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(multer({ dest: '/tmp/'}).array('image'));
    app.get('/upload', function (req, res) {
    res.sendFile(path.join(__dirname,'..','/view/upload.html'));
  });

  app.post('/upload', function (req, res) {

    console.log(req.files[0]);

    var file = path.join(__dirname,'..','/public/img',req.files[0].originalname);
    fs.readFile( req.files[0].path, function (err, data) {
      fs.writeFile(file, data, function (err) {
        if( err ){
          console.log( err );
        }else{
          response = {
              message:'图片上传成功',
              filename:req.files[0].originalname
          };
        }
        console.log( response );
        res.send( JSON.stringify( response ) );
      });
    });
  })
}
