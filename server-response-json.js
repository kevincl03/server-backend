const http = require('http'); //importar modulo http

const server = http.createServer((req, res) => {
   //Establecer el codigo de estado y el tipo de contenido de la respuesta 
   res.statusCode = 200;
   res.setHeader('Content-Type', 'application/json');
   res.end(JSON.stringify([
      {
        tipoCarro: "Deportivo",
        marca: "Ferrari",
        modelo: "SF90 Spider",
        color: "Rojo"
      },
      {
         tipoCarro: "Pick-up",
         marca: "Ford",
         modelo: "F-150",
         color: "Blanco"
      }
    ])); //Enviar la respuesta
});

//Asignar un puerto y hacer que el servidor escuche en ese puerto
const port = 3000;
server.listen(port, () => {
   console.log(`El servidor esta escuchando en http://localhost:${port}`);
});