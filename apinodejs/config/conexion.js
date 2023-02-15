const mysql = require('mysql2');
const db={
    host: 'localhost',
    user: 'root',
    password: 'curso',
    database:'tienda'
}
const conexion = mysql.createConnection(db);
conexion.connect(function (err) {
    if (err) {
        console.log('Error al conectar con la base de datos');
        console.log(err)
    }else{
        console.log('Conexión establecida');
    } 
});
module.exports = conexion;