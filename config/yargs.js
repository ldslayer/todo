const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca la tarea como completada'
}
 
const argv = require('yargs')
    .command('crear', 'Crear un elemento Tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea de la lista', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}