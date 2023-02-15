const rutas = require('express').Router();
const conexion = require('./config/conexion');
rutas.get('/', (req, res) => {
    let sql = 'SELECT * FROM producto';
    conexion.query(sql, (error, rows,fields) => {
        if (error) {
            console.log('Error al obtener los datos');
            return;
        }
        res.json(rows);
    });
});
rutas.get('/:id', (req, res) => {
    const {id} = req.params;
    let sql = 'SELECT * FROM producto where id = ?';
    conexion.query(sql,[id] ,(error, rows,fields) => {
        if (error) {
            console.log('Error al obtener los datos');
            return;
        }
        res.json(rows);
    });
});
rutas.post('/', (req, res) => {
    const {nombre,precio,imagen}=req.body;
    let sql = `INSERT INTO producto (nombre,precio, imagen) VALUES ('${nombre}','${precio}','${imagen}')`;
    conexion.query(sql, (error, rows,fields) => {
        if (error) {
            console.log('Error al obtener los datos');
            return;
        }
        res.json({status: 'Producto agregado'});
    });
});
rutas.delete('/:id', (req, res) => {
    const {id} = req.params;
    let sql = `DELETE FROM producto where id = '${id}'`;
    conexion.query(sql,[id] ,(error, rows,fields) => {
        if (error) {
            console.log('Error al obtener los datos');
            return;
        }
        res.json({status: 'Producto eliminado'});
    });
});
rutas.put('/:id', (req, res) => {
    const {id} = req.params;
    const {nombre,precio, imagen}=req.body;
    let sql = `UPDATE producto SET nombre = '${nombre}',precio= '${precio}',imagen = '${imagen}' where id = '${id}'`;
    conexion.query(sql,[id] ,(error, rows,fields) => {
        if (error) {
            console.log('Error al obtener los datos');
            return;
        }
        res.json({status: 'Producto modificado'});
    });
});
module.exports = rutas;