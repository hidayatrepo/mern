'use strict';
const response = require('./../config/response');
const model = require("./../model/m_data");
// var dateFormat = require('dateformat');
// var axios = require('axios').default;

module.exports.get = async function(req, res) {

    const body = {
        // nama : req.body.nama,
    }

    const result = await model.get(body)

    response.result(result, res)
};