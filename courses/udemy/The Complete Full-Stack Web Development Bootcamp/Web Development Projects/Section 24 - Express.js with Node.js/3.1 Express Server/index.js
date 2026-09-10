import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
});

app.get("/about", (req, res) => {
    res.send(`
        <h1>About Me</h1>
        <p>My name is Ryan</p>
    `);
});

app.get("/contact", (req, res) => {
    res.send(`
        <h1>Contact Me</h1>
        <p>Email: ryan@example.com</p>
    `);
});

app.get("/projects", (req, res) => {
    res.send(`
        <h1>My Projects</h1>
        <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
        </ul>
    `);
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});