const argv= require('yargs')
.option('b',{
    alias:'base',
    type: 'number',
    demandOption: 'true',
    describe:'es la base de la tabla de multiplicar'
}).option('l',{
    alias:'listar',
    type: 'boolean',
    default:false,
    describe:'Muestra la tabla en consolola'
}).option('h',{
    alias:'hasta',
    type: 'number',
    default:10,
    describe:'longitud de la tabla'
})
.argv;

module.exports =   argv;