const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbconexion = require('./config/database');

mongoose.connect(dbconexion.url, dbconexion.options)
    .then(() => {
        console.log("conexion exitosa");
    }).catch(err => {
        console.log("conexion fallo");
        process.exit();
    });



const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(require('./routes/cliente.router'));
app.use(require('./routes/libro.router'));
app.use(require('./routes/editorial.router'));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log("el servidor corre por el puerto ", app.get('port'));

})