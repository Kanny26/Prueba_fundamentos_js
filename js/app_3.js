import { generarTabla } from "../modulos/Tabla_multiplicar.js"

let numero = Number(prompt("Ingrese el numero para mostrar la tabla: "));

let tabla = generarTabla(numero);

alert(`Tabla del ${numero}: \n ${numero} x  =  ${tabla}`);
