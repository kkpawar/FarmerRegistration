
const express = require('express');

const app = express();

 const port = 3001;

app.set("view engine", "ejs")


app.get("/", function (req, res) {
    res.sendFile("index.html",{root:__dirname})
})


app.listen(port, () => {
    console.log("App is working on port no 3001");
});