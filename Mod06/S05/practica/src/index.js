const express = require('express')
const app = express()
const port = 8000

/* middleware */
app.use(express.static(`${__dirname}/public`))


app.listen(port, () => console.log(`Servicio Corriendo en el puerto ${port}`))
app.get('/', (request,response) =>{
    response.sendFile(`${__dirname}/views/index.html`)
})

app.get('/galeria', (peticion,respuesta) =>{
    respuesta.sendFile(`${__dirname}/views/galeria.html`)
})

app.get('*', (req, res) =>{
    res.sendFile(`${__dirname}/views/404.html`)
})

/*
GET = obtener
POST = agregar o incomporar registros
PUT = se usa para editar (info completa, todo el registro se edita)
PATCH = editar también (actualiza solo que se requiere)
DELTE = elimina
HEAD = 
OPTIONS = 
*//*
middelware (permisos, que es lo que puede ver el front)
*//*
handle
*/