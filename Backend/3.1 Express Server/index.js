import express, { application } from "express";
const server = express();
const port = 3000;

server.get("/", (req, res) => {
    res.send("<h1>This is the Home Page<h1>")
});

server.get("/contact", (req, res) => {
    res.send("<h1>This is contact<h1>")
});

server.get("/about", (req, res) => {
    res.send("<h1>This is about.<h1>")
});

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});