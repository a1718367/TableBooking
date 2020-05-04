// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

var tables = [];
var waitList = [];
// Routes
// =============================================================
app.use(express.static('public'));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// app.get("/tables", function (req, res) {
//   res.sendFile(path.join(__dirname, "tables.html"));
// });


// Displays all tables
app.get("/api/tables", function (req, res) {
  return res.json(tables);
});

// Displays wait list
app.get("/api/waitList", function (req, res) {
  return res.json(waitList);
});

app.post("/api/tables", function(req,res){
    let newTable = req.body;
    tables.push(newTable);
    res.json(newTable);
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });