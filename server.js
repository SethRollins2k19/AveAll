const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const urlencodedParser = bodyParser.urlencoded({extended: false});
const PORT = 9000;

const STATIC = path.resolve(__dirname, 'dist');
const INDEX = path.resolve(STATIC, 'index.html');

const app = express();
app.use(bodyParser.json());

app.use(express.static(STATIC));

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:10012001DenInc@loggining-uuxhk.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



app.post('/login',urlencodedParser,async function (req, res) {

    try {
        await client.connect( async err => {
            const collection = client.db("loginData").collection("Login");

            if(await collection.findOne({email: `${req.body.email}`, password: `${req.body.password}`})){
                res.send("1")
            } else {
                res.send("0")
            }
        })
    } catch (e) {
        console.log(e)
    }


});
app.post('/register',urlencodedParser, async function (req, res) {
    try {
        await client.connect( async err => {
            const collection = client.db("loginData").collection("Login");
            if(await collection.findOne({email: `${req.body.email}`})){
                res.send("0")
            } else {
                await collection.insertOne({"email": `${req.body.email}`, "password": `${req.body.password}`})
                res.send("1")
            }
        })
    } catch (e) {
        console.log(e)
    }

})

app.listen(PORT, function () {
    console.log('Server up and running on ', `http://localhost:${PORT}/`)
})