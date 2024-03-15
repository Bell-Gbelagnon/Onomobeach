const clientRoute = require("./routes/clientRoutes")
const reservationRoute = require ('./routes/reservationRoute')
const commandeRoute = require ('./routes/commandesRoute')


const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/user', clientRoute)
app.use('/reservation', reservationRoute)
app.use('/commande', commandeRoute)

app.listen(5000, () => {
    console.log('Bienvenue a mon seveur')
})