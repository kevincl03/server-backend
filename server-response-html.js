const http = require('http'); //importar modulo http

const server = http.createServer((req, res) => {
   //Establecer el codigo de estado y el tipo de contenido de la respuesta 
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/html');
   res.end('<h1>Respuesta en HTML</h1><br><h3>Server con Respuesta en HTML</h3><br><ol><li>Item 1</li><li>Item 2</li></ol>'); //Enviar la respuesta
});

//Asignar un puerto y hacer que el servidor escuche en ese puerto
const port = 3000;
server.listen(port, () => {
   console.log(`El servidor esta escuchando en http://localhost:${port}`);
});