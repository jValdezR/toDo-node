const fs = require('fs');

let listadoPorHacer = [];

const cargarDb = () =>{
    try {
        listadoPorHacer = require('../db/db.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const guardarDb = () =>{
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/db.json',data,(err)=>{
        if (err) throw new Error ('No se pudo grabar');
    })
}

const crear = (descripcion) => {

    cargarDb();
    let toDo = {
        descripcion,
        completado: false,
    };

    listadoPorHacer.push(toDo);
    guardarDb();
    return toDo;
}

const getListado = () => {
cargarDb();
return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDb();

    let index = listadoPorHacer
    .findIndex((tarea)=>tarea.descripcion === descripcion);

    if (index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true;
    }else{
        return false;
    }
}
const borrar = (descripcion) => {
    cargarDb();

    let index = listadoPorHacer
    .findIndex((tarea)=>tarea.descripcion === descripcion);

    if (index >= 0){
        listadoPorHacer.splice(index,1);
        guardarDb();
        return true;
    }else{
        return false;
    }

}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}