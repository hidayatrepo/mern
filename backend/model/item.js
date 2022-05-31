var general = require('./../config/general');

module.exports = {

    get: function(connection, callback) {
      
      connection.query("SELECT * FROM tb_item",function(err, result)
      {
        if (err){
          callback(err,null);
        }   
        else{
          for (var key in result) {
              result[key].id = general.encrypt(result[key].id);
              result[key].created_at = general.date_format(result[key].created_at);
          }
          callback(null,result);
          
        }
      });

    },

    get_by_id: function(connection, data, callback) {
      // connection.query("SELECT * FROM mahasiswa WHERE id_mahasiswa = ?",[ data.id ], callback)
      connection.query('SELECT * FROM tb_item WHERE id = ?', [data.id], function(err, result)
      {
          if (err){
            callback(err,null);
          }   
          else{
            // var data = {
            //   id      : req.body.id
            // };
            // data.tambahan = "-";
            for (var key in result) {
                // console.log("key " + key + " has value " + data[key]);
                // result[i].tambahan = "-";
                result[key].id = general.encrypt(result[key].id);
                result[key].created_at = general.date_format(result[key].created_at);
                // delete result[0]['created_at'];
            }
            callback(null,result);
            
          }
      });

    },

    upload_file: function(req, res, par_name ,callback) {
      
      var multer = require('multer');
      var dir_up = 'static/';
      var path = require('path');
      var new_name;
      var storage = multer.diskStorage({
          destination: function(req, file, cb) {
              cb(null, dir_up);
          },
          filename: function (req, file, cb) {
              if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
                  res.send('Only certain formats are allowed!');
              }
              var extention = path.extname(file.originalname);
              new_name = general.uniq(100) + extention;
              cb(null , new_name);
          }
      });
      var upload = multer({ storage: storage });
      upload.single(par_name)(req, res, function(err) {

          if (!req.file) {
              callback(null,'Please select an file to upload');
          }
          else if (err instanceof multer.MulterError) {
              callback(null,err);
          }
          else if (err) {
              callback(null,err);
          }else{
              // console.log(req.body, req.files);
              callback(null,dir_up+new_name);
          }

      });

    },
    
    
}