const http = require('http')
const { loadjson } = require('./NodeWithJason')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 7000;
const cors = require('cors');
app.use(cors({
    orgin: "*",
}))
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log("The Server is running...!"))
app.get('/getjson', (req, res) => {
    res.send(loadjson())
})
app.get('/add', (req, res) => {
    res.sendFile(__dirname + '/addTicket.html');
})
app.post('/submit', (req, res) => {
    console.log(JSON.stringify(req.body))
    const fs = require("fs")
    var data = fs.readFileSync("data.json");
    
    var myObj = JSON.parse(data);
    console.log(myObj)
    var item =req.body
    myObj['records'].push(item);
    var newData2 = JSON.stringify(myObj);
    fs.writeFile("data.json", newData2, (err) => {

        if (err) throw err;
        console.log("New ticket added");
    });
    res.send('Data updated!!');
})