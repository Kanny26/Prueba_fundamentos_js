import { generarTabla } from "../modulos/Tabla_multiplicar.js"

let numero = Number(prompt("Ingrese el numero para mostrar la tabla: "));

let tabla = generarTabla(numero);

let texto = alert(`Tabla del ${numero}: \n`);

for(let i = 1; i <= 10; i++){
    texto += (`${numero} X ${i} = ${tabla[i-1]}\n`);
}
