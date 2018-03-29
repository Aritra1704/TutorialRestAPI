// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDb server');
    }

    console.log('Connected to Mongo server');

    const db = client.db('TodoApp');

    //Delete many
    // db.collection('Todos').deleteMany({text: "Edit Lunch"}).then((result) => {
    //     console.log(result);
    // })

    //delete one
    // db.collection('Todos').deleteOne({text: "Edit Lunch"}).then((result) => {
    //     console.log(result);
    // });

    //find one and delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })


    //delete all in collection Users
    // db.collection('Users').deleteMany({name: "Aritra"}).then((result) => {
    //     console.log(result);
    // });
    
    db.collection("Users").findOneAndDelete({
        _id: new ObjectID("5a8ea70f83184f4035c1dcd9")
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    })

    //client.close();  
});