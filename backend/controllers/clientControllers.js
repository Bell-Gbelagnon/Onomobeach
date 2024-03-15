const dataBase = require("../config/mysql")

exports.signup = (req, res) => {
    const insertClientQuery = "INSERT INTO `clients` (nom_client, prenom_client, age_client, sexe_client, password_client, contact_client) VALUES (?, ?, ?, ?, ?, ?)";

    dataBase.query(insertClientQuery, [
        req.body.nom,
        req.body.prenom,
        req.body.adresse,
        req.body.telephone,
        req.body.email,
        req.body.dateArrivee,
        req.body.DateDepart,
        req.body.TypeChambre,
        req.body.NombrePersonnes,
        req.body.statutREservation
    ], (error, result) => {
        if (error) {
            return res.status(401).json(error)
        }
        console.log("Client inscrit avec succes")
        return res.status(201).json({ id: result.insertId})
    })
}