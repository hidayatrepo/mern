const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
const app = express();
var cors = require('cors');
// var port = 1000;

//parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

//panggil routes
var routes = require('./config/routes');
routes(app);

//daftarkan menu routes dari index
// app.use('/auth', require('./middleware'));
app.use('/', require('./middleware'));

app.use('/static', express.static(path.join(__dirname, 'static')));

app.set('view engine', 'ejs');

app.use(function (req, res, next) {
    res.status(404).send({status:false, data:'Unknown method!'});
});

// app.listen(port, () => {
//     console.log(`Server started on port ${port}`);
// });

module.exports = app;