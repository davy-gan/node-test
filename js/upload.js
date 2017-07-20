
var path = require('path');
var fs = require("fs");

var multer  = require('multer');

module.exports = function (app) {
  // 以相对 入口文件 index.js建立文件夹
  // app.use(multer({ dest: './uploads/'}).array('image'));
  // 以绝对路径建立文件夹
  app.use(multer({ dest: path.join(__dirname,'..','/uploads/')}).array('image'));
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
