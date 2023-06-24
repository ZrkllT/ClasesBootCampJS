const express = require('express')
const hbs = require('hbs')
const app = express()
const port = 8000

/* middleware */
app.use(express.static(`${__dirname}/public`))

/* handlebars */
hbs.registerPartials(`${__dirname}/views/partials`, function(error){})
app.set('view engine', 'hbs')
app.set('views', `${__dirname}/views`)
app.listen(port, () => console.log(`Servicio Corriendo en el puerto ${port}`))

app.get('/', (request,response) =>{
    response.render('index', {
        titulo: 'Index desde JS',
        mostrarFotos: true
    })
})

app.get('/galeria', (request,response) =>{
    const fotos = [
        { titulo: 'Mega Venusaur', url: 'https://play.pokemonshowdown.com/sprites/gen5/venusaur-mega.png', contenido: 'asadasdasd'}
        ,{ titulo: 'Gastrodon', url: 'https://play.pokemonshowdown.com/sprites/gen5/gastrodon.png', contenido: 'asadasdasd'}
        ,{ titulo: 'Scrafty', url: 'https://play.pokemonshowdown.com/sprites/gen5/scrafty.png', contenido: 'asadasdasd'}
        ,{ titulo: 'Zapdos', url: 'https://play.pokemonshowdown.com/sprites/gen5/zapdos.png', contenido: 'asadasdasd'}
        ,{ titulo: 'Heatran', url: 'https://play.pokemonshowdown.com/sprites/gen5/heatran.png', contenido: 'asadasdasd'}
        ,{ titulo: 'Tapu Lele', url: 'https://play.pokemonshowdown.com/sprites/gen5/tapulele.png', contenido: 'asadasdasd'}
        ]
    response.render('galeria', {
        titulo: 'Galeria desde JS',
        fotos: fotos
    })
})

app.get('/contacto', (request,response) =>{
    response.render('contacto', {
        titulo: 'Contacto desde JS'
    })
})