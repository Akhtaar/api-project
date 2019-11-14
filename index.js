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
    }),
    errorMessage = require("./error_gestion")

// Connect to BDD
connect.connect(err => {
    if (err) console.error("Error connecting MySQL: " + err.stack);
});

// parse application/x-www-form-urlencoded
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})

app.post("/login", (req, res) => {
    const data = req.body;
    connect.query(
        "SELECT * FROM users WHERE email = ?", [data.email],
        (error, results) => {
            if (error) sendReturn(res);
            else if (results.length == 0)
                errorMessage.login_donne_manquante_401(res);
            else {
                //bcrypt.compare(data.password, results[0].password, (isOK) =>{})
                // Comparaison du password via le hash de la BDD
                bcrypt.compare(data.password, results[0].password).then(isOk => {
                    if (isOk) getUsers(res, "where idusers = " + results[0].idusers);
                    else {
                        sendReturn(res, 418, {
                            error: true,
                            message: "Password/Email doesn't exist"
                        });
                    }
                });
            }
        }
    );
});



const sendReturn = (
    res,
    status = 500,
    data = {
        error: true,
        message: "Processing error"
    }
) => {
    res.setHeader("Content-Type", "application/json"); // Typage de la data de retour
    res.status(status).json(data);
};

app.listen(port, () => console.log(`Example app listening on port port!`))