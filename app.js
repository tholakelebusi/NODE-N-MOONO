const Express = require("express");
const BodyParser = require("body-parser");


const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = 'mongodb+srv://tholakelebusi:12345@cluster0.li3ju.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const DATABASE_NAME="accounting_dep";

var app=Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database,collecton;
var MongoClient = require("mongodb").MongoClient
app.listen(5000,()=>
var app=Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database,collecton;
var MongoClient = require("mongodb").MongoClient
app.listen(5000,()=>
{
    MongoClient.connect(CONNECTION_URL,{
        useNewUrlParser:  true
    },(error,client)=>
    {
        if(error)
        {
            throw error;
        }
        database=client.db(DATABASE_NAME);
        collecton= database.collection("personnel");
        console.log("Connected to `"+DATABASE_NAME+"`!");
    })
})


app.post("/personnel", (req, response) => {
    collection.insert(req.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send({
            name:req.body.name,
            surname:req.body.surname
        });
    });
});