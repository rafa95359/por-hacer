 
const  descripcion={
        demand : true,
        alias : 'd',
        desc : 'Descripcion de la tarea por hacer'
}
const completado={
    alias : 'c',
    default : true,
    desc: 'Marca como completado'
}   



const argv = require ('yargs')
.command('crear','Crear elemento por hacer',descripcion)
.command('actualizar','Actualiza el estado completado de una tarea',{descripcion,completado})
.command('borrar','Borrar elemento por hacer',descripcion).help().argv;









module.exports={
    argv
}