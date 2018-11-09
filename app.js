
const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, {"Content-Type": "application/json"});

    let salida = {
        nombre: 'Antonio',
        edad: '40',
        url: req.url
    }

    res.write(JSON.stringify(salida));

    res.end();

})
.listen(3000);

console.log('Escuchando en el puerto 3000');