const mysql = require("mysql2")
const dataBase = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "onomo"
})

dataBase.connect((error) => {
    if (error) throw error
    console.log("Base de donnee connecter avec succes")

})

module.exports = dataBase;