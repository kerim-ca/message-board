
const express = require("express");

const path = require("path");



const app = express();

const messages = [
    {
        text: "hi there",
        user: "amando",
        added: new Date()
    }, 
    {
        text: "hello world", 
        user: "charles", 
        added: new Date()
    }
];


app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", {messages: messages});
});

app.get("/new", (req, res) => {
    res.render('form');
});



app.post("/new", (req, res) => {
    const author = req.body.author;
    const message = req.body.message;
    console.log(`new message from ${author}: ${message}`);
    messages.push({text: message, user: author, added: new Date()})
    res.redirect("/")
});


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");





const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});