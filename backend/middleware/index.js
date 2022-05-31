var express = require('express');
var auth = require('./auth');
var router = express.Router();
var verification = require('./verification');
var item = require('./../controller/item');
var data = require('./../controller/data');

//daftarkan menu registrasi
// router.post('/auth/register', auth.register);
// router.post('/auth/login', auth.login);
// router.post('/auth/reset_password', verification(1), auth.reset_password);
// router.get('/auth/verification', auth.verification);

// router.get('/', verification(1), item.index);
router.post('/', item.index);
router.post('/item/get', item.get);

router.post('/data/get', data.get);

// router.post('/item/get', verification(1), item.get);
// router.post('/item/add', verification(1), item.add);
// router.get('/item/print', verification(1), item.print);


module.exports = router;