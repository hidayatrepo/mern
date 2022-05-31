'use strict';
const response = require('./../config/response');
const model = require("./../model/m_data");
// var dateFormat = require('dateformat');
// var axios = require('axios').default;

module.exports.get = async function(req, res) {

    const body = {
        search : req.body.search,
    }

    const result = await model.get(body)

    response.result(result, res)
};

module.exports.update = async function(req, res) {

    const body = {
        _id : req.body.id,
        nama : req.body.nama,
        nominal : req.body.nominal,
    }

    const result = await model.update(body)

    response.result(result, res)
};