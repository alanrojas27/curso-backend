const express = require("express")

const contenedor = new Contenedor(producto)
const app = express()

const PORT = process.env.PORT || 8080

const server = app.listen (PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})

app.get('/', (req, res) => {res.send({ mensaje: 'hola mundo' })})

app.get('/productos', (req, res) => {res.send([
    {
      "title": "Escuadra",
      "price": 123.45,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
      "id": 1
    },
    {
      "title": "Calculadora",
      "price": 234.56,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
      "id": 2
    },
    {
      "title": "Globo Terráqueo",
      "price": 345.67,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
      "id": 3
    }
   ]
   )})

   app.get('/productoRandom', (req, res) => {res.send({
    "title": "Calculadora",
    "price": 234.56,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
    "id": 2
  })})
