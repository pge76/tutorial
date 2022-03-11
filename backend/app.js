const express = require("express");
const app = express();

const mongoose = require("./database/mongoose");
const PORT = 3000;

const List = require("./database/models/list");
const Task = require("./database/models/task");

// CORS Handling
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	next();
});

app.use(express.json());
app.listen(PORT, () => {
	console.log(":: server is running on port " + PORT);
});


/* 
 - Endpoints
    lists
        - readone, readall, create, update, delete
    tasks
        - readone, readall, create, update, delete
*/

// readall lists
app.get("/lists", (req, res) => {
    List.find({})
        .then(lists => { res.send(lists) })
        .catch(err => { res.status(400).send(err) });
})

// read one list
app.get("/lists/:id", (req, res) => {
    List.findById(req.params.id)
        .then(list => { res.send(list) })
        .catch(err => { res.status(400).send(err) });
});

// create list
app.post("/lists", (req, res) => {
    (new List({ title: req.body.title })
        .save()
        .then(list => { res.send(list) })
        .catch(err => { res.status(400).send(err) }))
});

// update a list
app.patch("/lists/:id", (req, res) => {
    List.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(list => { res.send(list) })
        .catch(err => { res.status(400).send(err) });
});

// delete a list
app.delete("/lists/:id", (req, res) => {
    List.findByIdAndRemove(req.params.id)
        .then(list => { res.send(list) })
        .catch(err => { res.status(400).send(err) });
});