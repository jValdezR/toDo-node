const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}

const completado = {
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    }
}


const argv = require('yargs')
.command('crear',
'Crea un nuevo elemento en la lista',
descripcion)
.command('actualizar',
'Actualiza un elemento en la lista',
{
    descripcion,
    completado}
)
.command('borrar',
'Borra un elemento en la lista',
descripcion)
.help()
.argv;

module.exports = {
    argv
}