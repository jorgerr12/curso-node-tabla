const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = '';
    let consola = '';
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.green} ${i} = ${base * i}\n`;
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    const archivo = `tabla-${base}.txt`;
    if (listar) {
      console.log(consola);
    }
    return archivo;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
