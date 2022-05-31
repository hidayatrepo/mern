const db = require('./../config/database');

module.exports.get = async function(body) {

    const query = {
        // nama : 'PRODUK A'
    };
    const data = await db.collection("cl_data").find(query).toArray();

    var result = {
        'code'      : '200',
        'result'    : 'true',
        'message'   : 'Berhasil',
        'data'      : data,
    };

    return result;
}
