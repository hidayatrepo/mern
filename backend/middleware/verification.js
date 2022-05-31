const jwt = require('jsonwebtoken');
const config = require('../config/secret');
const knex = require('./../config/database');
const dateFormat = require('dateformat');

function verification(role){
    return function(req, rest, next){
        //cek authorizzation header
        var tokenWithBearer = req.headers.authorization;
        
        if(tokenWithBearer) {
            var token = tokenWithBearer.split(' ')[1];
            
            //verification
            jwt.verify(token, config.secret, function(err, decoded){
                if(err){
                    return rest.status(401).send({status:false, data:'Token not registered!'});
                }else {
                    if(role == 1){
                        // req.auth = decoded;
                        // next();

                        var now = new Date();
                        knex
                        .select('access_token','expired_date')
                        .from('tb_token')
                        .where('access_token',tokenWithBearer.replace('Bearer ','') )
                        .where('expired_date','>',dateFormat(now, "yyyy-mm-dd H:M:s") )
                        .then(function (records) {
                            if(records.length==0){
                                return rest.status(401).send({status:false, data:'Token expired!'});
                            }else{
                                knex('tb_token')
                                .where({ access_token: tokenWithBearer.replace('Bearer ','') })
                                .update({ expired_date: dateFormat(now.setDate(now.getDate()+30), "yyyy-mm-dd H:M:s") })
                                .then(function (resp) {
                                        req.auth = decoded;
                                        next();
                                })
                                .catch(function(error) {
                                    console.log(error);
                                })
                            }
                        })
                        .catch(function(error) {
                            console.log(error);
                        })
                        

                    }else {
                        return rest.status(401).send({status:false, data:'Failed to authorize your role!'});
                    }
                }
            });
        }else {
            return rest.status(401).send({status:false, data:'Token requered!'});
        }
    }
}

module.exports = verification