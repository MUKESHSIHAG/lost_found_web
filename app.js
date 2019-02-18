//setup
var express = require('express');
var app = express();

//connect to database
var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/lost-found", { useNewUrlParser: true })

//body-parser
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//creating schema and models
var lostSchema = new mongoose.Schema({ body: String });
var Lost = mongoose.model('Lost', lostSchema);
var foundSchema = new mongoose.Schema({ body: String });
var Found = mongoose.model('Found', foundSchema);

//connecting to views
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//routes
app.get("/", (req, res) => {
    Lost.find({}, (err, losts) => {
        res.render('index', {losts: losts})
    });  
});

app.post('/addLost', (req, res) => {
    var lostData = new Lost(req.body);
    lostData.save().then( result => {
        res.redirect('/');
    }).catch(err => {
        res.status(400).send("Unable to save data");
    });
});


app.get('/addFound', (req, res) => {
    Found.find({}, (err, found) => {
        res.render('found', {found: found})
    });  
})

app.post('/addFound', (req, res) => {
    var foundData = new Found(req.body);
    foundData.save().then( result => {
        res.redirect('/addFound');
    }).catch(err => {
        res.status(400).send("Unable to save data");
    });
});

// running on localhost
app.listen(3000, () => {
    console.log('listening on port 3000');
})
