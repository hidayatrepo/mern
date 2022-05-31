'use strict';

var response = require('./../config/response');
// var knex = require('./../config/database');
var db = require('./../config/database');
// var connection = require('./../connection');
var model = require("../model/item");
// var general = require('./../config/general');
var dateFormat = require('dateformat');
var uuid = require('uuid');
var axios = require('axios').default;

exports.index = function (req, res) {
    // response.ok("it work", res);
    return res.status(404).send({status:false, data:'Unknown method!'});
};

//menampilkan semua data item
exports.get = async function (req, res) {

    var hasil =  await db.find();

    response.ok(hasil, res)

    // knex
    // .select(
    // 'a.uuid_is as id',
    // 'a.name as name',
    // 'a.code',
    // 'b.uuid_is as id_type',
    // 'b.name as type',
    // )
    // .from('tb_item as a')
    // .leftJoin('tb_item_type as b', 'b.id', 'a.id_type')
    // .where('a.id_type','1')
    // .then(function (records) {
    //     // for (var key in records) {
    //         // records[key].id = general.encrypt(records[key].id);
    //         // records[key].id_type = general.encrypt(records[key].id_type);
    //     // }
    //     response.ok(records, res)
    // })
    // .catch(function(error) {
    //     console.log(error);
    // })

    // model.get(connection, function(error, rows) {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         response.ok(rows, res)
    //     }
    // })
};

//menambahkan data item
// exports.add = function (req, res) {

//     if(req.body.name==null||req.body.code==null){
//         return res.status(411).send({status:false, data:'There is empty data!'});
//     }
//     var name = req.body.name;
//     var code = req.body.code;
//     var data = {
//         name :name,
//         code: code,
//         id_type:1,
//         created_at : dateFormat(new Date(), "yyyy-mm-dd H:M:s"),
//         uuid_is : uuid.v4(),
//     }
//     knex('tb_item')
//     .insert(data)
//     .then(function (resp) {
//             response.ok('Success!', res);
//     })
//     .catch(function(error) {
//         console.log(error);
//     })
// };

// exports.print = function (req, res) {

//     var posts = new Array();
//     knex
//     .select('*')
//     .from('tb_item')
//     .then(function (records) {
//         // posts = records;
//         // records.forEach(function(value) {
//             posts = records;
//         // });

//         res.render("./../view/print.ejs", {posts: posts});
//     })
//     .catch(function(error) {
//         console.log(error);
//     })

//     // var posts = [
//     //     {title: "Post 1", name: "Danny"},
//     //     {title: "Post 2", name: "Alex"},
//     //     {title: "Post 3", name: "Matt"},
//     //     {title: "Post 4", name: "Manny"}
//     // ];
//     // res.render("./../view/print.ejs", {posts: posts});
// };


