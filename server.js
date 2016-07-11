var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 3000;

var people = require('./people');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.render('index', {
        title: 'Angular views'
    });
});

app.get('/people', function(req, res){
    res.json(people);
});

app.get('/people/:person_id', function(req, res){
    
    var found;
    
    for(var i = 0; i < people.length; i++)
        if(people[i].id === req.params.person_id)
            found = people[i];
    
    res.send(found);
});

app.listen(port, function(){
    console.log('localhost:' + port);
});