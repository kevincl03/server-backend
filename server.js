const http = require('http'); //importar modulo http

const server = http.createServer((req, res) => {
   //Establecer el codigo de estado y el tipo de contenido de la respuesta 
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   res.end('Respuesta del servidor\nHola, Mundo!\nEsto es una respuesta del servidor en texto plano.'); //Enviar la respuesta
});

//Asignar un puerto y hacer que el servidor escuche en ese puerto
const port = 3000;
server.listen(port, () => {
   console.log(`El servidor esta escuchando en http://localhost:${port}`);
});