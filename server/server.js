const{ObjectId} = require('mongodb');
var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({ 
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectId.isValid(id)) {
        console.log('Id not valid');
        return res.status(404).send();
    }
    
    Todo.findById(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }
        // console.log({todo});
        res.send({todo});
    }).catch((e) => {
        return res.status(400).send();
    })
//    res.send(req.params);
});


app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {app};