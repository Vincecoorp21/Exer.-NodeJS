// Llamar a la función esPar con los siguientes valores:
// 2, 3, 101, 201, 202, 100

//const { esPar } = require('./numeros');

const lp = require('logplease');
const esPar = require('./numeros');
console.log(esPar.esPar(4));
console.log(esPar.esPar(5));

const Logger = require('logplease');
const logger = Logger.create('utils');

// if (esPar.esPar(2)) {
// }

function mostrarLog(num) {
  if (esPar.esPar(num)) {
    logger.info(`El número es par`);
  } else {
    logger.error(`El número es impar`);
  }
}

mostrarLog(2);
mostrarLog(3);
mostrarLog(101);
mostrarLog(201);
mostrarLog(202);
mostrarLog(100);
