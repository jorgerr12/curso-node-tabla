const {crearArchivo} = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear(); 

// const [,,arg3 = "base=2"] = process.argv;
// const [,base = 5] = arg3.split("=");
// console.log(argv);
console.clear(); 
crearArchivo(argv.b, argv.l,argv.h)
.then(archivo =>console.log(archivo.rainbow,"creado"))
.catch(err=> console.log(err));