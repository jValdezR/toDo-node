const argv = require('./config/yargs').argv;
const toDo = require('./toDo/toDo');
const colors = require('colors');
let comando = argv._[0];

switch( comando ) {
    case 'crear':
    console.log('Crear toDo');
    let tarea = toDo.crear(argv.descripcion)
    console.log(tarea);
    break;

    case 'listar':
    console.log('Mostrar toDo\'s');
    let listado = toDo.getListado();
    for(let tarea of listado){
        console.log('====toDo==='.green);
        console.log(tarea.descripcion);
        console.log('Estado: ',tarea.completado);
        console.log('==========='.green);
    }
    break;

    case 'actualizar':
        console.log('actualizar toDo');
        let actualizado = toDo.actualizar(argv.descripcion,argv.completado)
        console.log(actualizado);
        break;

        case 'borrar':
            let borrado = toDo.borrar(argv.descripcion);
            console.log(borrado);
            break;
        default:
            console.log('Comando no reconocido');
}