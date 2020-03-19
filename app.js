const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/porHacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tareaPorHacer = porHacer.crear(argv.descripcion);
        console.log(tareaPorHacer);
        break;

    case 'listar':
        let listado = porHacer.listar();

        for (let tarea of listado) {
            console.log('------- Por Hacer -------'.yellow);
            console.log(tarea.descripcion);
            if (tarea.completado == true) {
                console.log('Estado:', `${tarea.completado}`.green);
            } else {
                console.log('Estado:', `${tarea.completado}`.red);
            }
            console.log('-------------------------'.yellow);
        }

        break;

    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        break;

    default:
        console.log('Comando no reconocido');
}