const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
 

//CONNECTING MONGO
const CONNECTION_URL='mongodb+srv://tholakelebusi:12345@cluster0.li3ju.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const DATABASE_NAME='test';
app.listen(5000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
       
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("devices");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});






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


;

app.get("/personnel", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});


app.get("/personnel/:id", (request, response) => {
    collection.findOne({ "_id":(request.params.id) }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});


app.put("/personnel/:id", (request, response) => {
    collection.findOne({ "_id":(request.params.id) }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});


app.delete("/personnel/:id", (request, response) => {
    collection.remove({ "_id":(request.params.id) }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});