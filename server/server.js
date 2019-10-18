const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
 
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.json({  
      'mensaje' : 'Bienvenido A Este Sitio Cuya Finalidad Es Aprender E Invitar A Estudiar Node.js Con MongoDB'
    })
});

app.get('/database', function (req, res) {
    console.log("Se Conecto Correctamente A La Base De Datos Momento2")
    
  });

  app.get('/saludo/:nombre', function (req, res) {
    res.json({
        'data' : `Hola ${req.params.nombre}`
    })

  });





app.get('/edad/:xy', function (req, res) {
    let datos = req.body;

    if(req.params.xy < 18){
        res.status(200).json({
            'data' : `Es Menor De Edad Y Tiene ${req.params.xy}`
        });
    }else{
        res.json({
            'data' : `Es Mayor De Edad Y Tiene: ${req.params.xy}`
        })
    }
});


mongoose.connect('mongodb://localhost:27017/tienda', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, res) => {
    if(err) throw err;
    console.log("Conectado a la DB");
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor ONLINE en el puerto ${ port }`);
});