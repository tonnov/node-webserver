
const express = require('express');
const app = express();

const hbs = require('hbs');

app.use( express.static(  __dirname + '/public') );

// Express HBS engine
hbs.registerPartials( __dirname + '/views/partials')
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home',{
        nombre: 'Tono',
        anio: new Date().getFullYear()
    });

});

app.get('/about', (req, res) => {

    res.render('about',{
        nombre: 'Tono',
    });

});

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});