const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const FLASK_BACKEND = "http://backend:5000/submit";

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/submit", async (req, res) => {
    try {
        await axios.post(
            FLASK_BACKEND,
            new URLSearchParams(req.body),
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        );

        res.render("success");

    } catch (error) {
        res.send(`
            <h2>Error while submitting form</h2>
            <p>${error.message}</p>
            <a href="/">Go Back</a>
        `);
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Frontend running on port ${PORT}`);
});