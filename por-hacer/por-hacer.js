const fs = require('fs');

let listaPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listaPorHacer);
    fs.writeFile("db/data.json", data, err => {
        if (err) throw new Error('No se pudo grabar')

    })
}

const cargarDB = () => {
    try {
        listaPorHacer = require('../db/data.json');
    } catch (error) {

    }
}

const getListado = ()=> {
    cargarDB();
    return listaPorHacer;
}

const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }
    listaPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const actualizar = (descripcion, completado=true)=>{
    cargarDB();
    const index = listaPorHacer.findIndex(el => el.descripcion == descripcion);
    if (index >= 0) {
        listaPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }

    return false;
}

const borrar = (descripcion)=>{
    cargarDB();
    let nuevoListado =  listaPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (nuevoListado.length !== listaPorHacer.length) {
        listaPorHacer = nuevoListado
        guardarDB();
        return true;
    }
    return false;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}