const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Esta es la página principal');
  } else if (req.url === '/html') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Esta es la página con "Respuesta HTML"</h1>');
  } else if (req.url === '/json') {
    res.statusCode = 200;
    res.setHeader('content-Type', 'application/json');
    res.end(JSON.stringify({ message: "Respuesta del servidor en Json", statusCode: 200 } ));
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Página no encontrada');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
