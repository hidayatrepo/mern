'use strict';

exports.result = function(data, res){
    
    // var data = {
    //     'result':'true',
    //     'message':'Success',
    //     'data':data
    // };
    // console.log(data)
    // res.json(data);
    // res.end();

    if(data.code){
        var code = data.code;
        delete data['code'];
        res.status(code).send(data)
    }else{
        return res.status(404).send({status:false, data:'Unknown method!'});
    }
    
};