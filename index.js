const express = require("express"), // Express - System route pour REST API
    mysql = require("mysql"), // Package de connection BDD MySqli
    bodyParser = require("body-parser"), // Middleware pour la data das le body
    bcrypt = require("bcrypt"), // Une bibliothèque pour vous aider à hacher les mots de passe
    app = express(), // Création d'un application REST
    port = 3000, // Port de connection
    connect = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "api_project"
    });

// Connect to BDD
connect.connect(err => {
    if (err) console.error("Error connecting MySQL: " + err.stack);
});


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))