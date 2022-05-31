var crypto = require('crypto');
var dateFormat = require('dateformat');
var pass_crypt = 'unchunch123';

// exports.date_format = function (req, res) {
//     var converted_date = dateFormat(req, "yyyy-mm-dd H:M:s")
//     return converted_date;
// };

// exports.upload_file = function (filetoupload, res) {
    
// };

// exports.uniq = function (req, res) {
//     var length           = req;
//     var result           = '';
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//        result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;   
// };

// exports.encrypt = function (req, res) {
//     var mykey = crypto.createCipher('aes-128-cbc', pass_crypt);
//     var mystr = mykey.update(req.toString(), 'utf8', 'hex')
//     mystr += mykey.final('hex');
//     return mystr;
// };

// exports.decrypt = function (req, res) {
//     var mykey = crypto.createDecipher('aes-128-cbc', pass_crypt);
//     var mystr = mykey.update(req.toString(), 'hex', 'utf8')
//     mystr += mykey.final('utf8');
//     return mystr;
// };