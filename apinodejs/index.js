const cors = require('cors');
require('./config/conexion');
const express = require('express');
const port = (process.env.port || 3000);
const app = express();
app.use(cors());
//admitir datos
app.use(express.json());
 //configuraciones
app.set('port', port);
app.use('/api',require('./rutas'));
//Iniciando el servidor
app.listen(app.get('port'), (error) => {
    if (error) {
        console.log('Error al iniciar el servidor');
        return;
    }
    console.log('Servidor en el puerto', app.get('port'));
});