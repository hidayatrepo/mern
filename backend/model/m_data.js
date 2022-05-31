const db = require('./../config/database');

module.exports.get = async function(body) {

    const query = {

        // nama : 'Toples Gracia 4L',

        // nominal : {$gt : 20000,},
        
        flag : 1 ,
    }
    
    const data = await db.collection("cl_data")
                    .find(query)
                    .project({ 
                        nama: 1,
                        nominal: 1,
                        logo: 1,
                    })
                    // .limit(2)
                    // .skip(4)
                    .sort({
                        nominal: -1,
                    })
                    .toArray()

    const result = {
        'code'      : '200',
        'result'    : 'true',
        'message'   : 'Success',
        'data'      : data,
    }
    return result
}
