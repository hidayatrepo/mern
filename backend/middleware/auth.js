// var connection = require('../connection');
// var mysql = require('mysql');
var response = require('./../config/response');
var knex = require('./../config/database');
var md5 = require('md5');
var jwt = require('jsonwebtoken');
var config = require('../config/secret');
var ip = require('ip');
var nodemailer = require('nodemailer');
// var general = require('./../config/general');
var uuid = require('uuid');
var dateFormat = require('dateformat');

let smtpTransport = nodemailer.createTransport({
     host: "smtp.gmail.com",
     port: 465,
     secure: true,
     auth: {
          user: "pt.perdamaianindonesia@gmail.com",
          pass: "1indonesia"
     }
})

var rand, mailOptions, host, link

// controller untuk login
exports.login = function (req, res) {
     if(req.body.username==null||
        req.body.password==null){
          return res.status(411).send({status:false, data:'There is empty data!'});
     }
     var post = {
          username: req.body.username,
          password: req.body.password,
          // email: req.body.email,
     }

     knex
    .select(
         'a.id',
         'a.username',
         'a.uuid_is',
         'a.id_level',
         'b.uuid_is as uuid_is_id_level',
         'b.name as level'
     )
    .from('tb_user as a')
    .where({username:post.username})
    .where({password:md5(post.password)})
    .leftJoin('tb_level as b', 'b.id', 'a.id_level')
    .then(function (rows) {
          if (rows.length == 1) {
               
               var token = jwt.sign({ rows }, config.secret, {
                    // expiresIn: '2400000'
                    // expiresIn: '365d'
                    expiresIn: '36500d'
               });
               // var expired = '365 days';
               // var expired = '0';

               uuid_is = rows[0].uuid_is;
               id_user = rows[0].id;
               username = rows[0].username;
               id_level = rows[0].uuid_is_id_level;
               level = rows[0].level;

               var now = new Date();
               
               var data = {
                    id_user: id_user,
                    access_token: token,
                    ip_address: ip.address(),
                    created_at: dateFormat(now, "yyyy-mm-dd H:M:s"),
                    expired_date : dateFormat(now.setDate(now.getDate()+1), "yyyy-mm-dd H:M:s")
               }
               
                knex('tb_token')
               .insert(data)
               .then(function (resp) {
                         res.json({
                              status: true,
                              id_user: uuid_is,
                              username: username,
                              id_level: id_level,
                              level: level,
                              data: 'Token JWT Generated!',
                              // expires: expired,
                              token: token,
                         });
               })
               .catch(function(error) {
                    console.log(error);
               })
          }
          else {
               res.json({ "status": false, "data": "Incorrect email or password!" });
          }
    })
    .catch(function(error) {
          console.log(error);
     })
}

//controller untuk registrasi user
exports.register = function (req, res) {
     if(req.body.username==null||
        req.body.email==null||
        req.body.password==null){
          return res.status(411).send({status:false, data:'There is empty data!'});
     }

     var post = {
          username: req.body.username,
          email: req.body.email,
          password: md5(req.body.password),
          id_level: 1,
          created_at: dateFormat(new Date(), 'yyyy-mm-dd H:M:s'),
          verified: 0,
          uuid_is: uuid.v4()
     }

     knex
    .select('username')
    .from('tb_user')
    .where({username:post.username})
    .then(function (rows) {
          if (rows.length == 0) {
                knex('tb_user')
               .insert(post)
               .then(function (resp) {
                    rand = Math.floor((Math.random() * 100) + 54)
                    // host = "localhost:1000"
                    host = req.get('host');
                    link = "http://" + host + "/auth/verification?id=" + rand
                    mailOptions = {
                         to: post.email,
                         subject: "Verifikasi Email",
                         html: "Hallo, <br> Please click the following verification link <br>" +
                              "<a href=" + link + ">Click here to verifikasi</a>"
                    }
                    smtpTransport.sendMail(mailOptions, function (error, response) {
                         if (error) {
                              res.json({
                                   status: false,
                                   isRegistered: false,
                                   data: "The verification email failed to send"
                              }).end();
                         } else {
                              res.json({
                                   status: true,
                                   isRegistered: false,
                                   data: "Verification email sent successfully"
                              }).end();
                         }
                    })
               })
               .catch(function(error) {
                    console.log(error);
               })
          } else {
               res.json({
                    status: false,
                    isRegistered: true,
                    data: "Your username has been registered!"
               }).end();
          }
    })
    .catch(function(error) {
          console.log(error);
     })
}

exports.verification = function (req, res) {

     console.log(req.protocol);

     if ((req.protocol + "://" + req.get('host')) == ("http://" + host)) {

          if (req.query.id == rand) {

               knex('tb_user')
               .where({ email: mailOptions.to })
               .update({ verified: 1 })
               .then(function (resp) {
                    res.end("<h1>Your email " + mailOptions.to + " has been verifiedi")
               })
               .catch(function(error) {
                    console.log(error)
                    res.end(error)
               })

          }
          else {
               res.end("<h1>Your email " + mailOptions.to + " not verified");
          }
     }
}

exports.reset_password = function (req, res) {

     if(req.body.email==null||
          req.body.currpassword==null||req.body.newpassword==null){
            return res.status(411).send({status:false, data:'There is empty data!'});
     }

     var data = {
          email: req.body.email,
          currpassword: md5(req.body.currpassword),
          newpassword: md5(req.body.newpassword)
     }

     knex
     .select('*')
     .from('tb_user')
     .where('email',data.email)
     .then(function (rows) {
          if (rows.length == 1) {
               email = rows[0].email;
               password = rows[0].password;

               if (data.currpassword == password) {
                    if (data.newpassword == data.currpassword) {
                         res.json({
                              status: false,
                              data: "The password is still the same as before!"
                         }).end()
                    } else {

                          knex('tb_user')
                         .where('email',email)
                         .update({ password: data.newpassword })
                         .then(function (resp) {
                              res.json({
                                   status: true,
                                   data: "Successfully Update Password!"
                              }).end()
                         })
                         .catch(function(error) {
                              res.json({
                                   status: false,
                                   data: error
                              }).end()
                         })

                    }
               }
               else {
                    res.json({
                         status: false,
                         data: "Failed to Update Password!"
                    }).end()
               }
          }
          else {
               res.json({
                    status: false,
                    data: "Password wrong!"
               }).end()
          }
     })
     .catch(function(error) {
          console.log(error);
     })
}