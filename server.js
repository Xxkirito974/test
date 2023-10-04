import express from "express";
const port = 5000
const app = express();


//Utilisation de res.send pour envoyer une repose HTML
app.get("/", (req, res) => {
    res.send("<h1>Ceci est une page HTML</h1>");
});

//Lancer le serveur 
app.listen(port, () => console.log("Hello World"))

//Fonction pour recupérer pour recup l'api
