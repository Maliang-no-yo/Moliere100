const express = require('express')
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');

const app = express()

// Function inside controllers
const checkGrammar = require('./controllers/textgears');
const readFile = require('./controllers/import');

app.use(fileUpload({
    createParentPath: true
}));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));


//start app 
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs')

app.listen(port, () => 
  console.log(`App is listening on port ${port}.`)
);

app.get('/', function(req, res){
    res.render('index');
})

app.post('/load', (req, res) => {
    readFile(req, res);
})

app.get('/text', function(req, res){
    checkGrammar(req, res);
})

app.get('/loading', function (req, res) {
    res.render('loading');
})

app.get('/a-propos', function (req, res) {
    res.render('a-propos');
})



