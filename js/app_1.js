import { calcularPromedio } from "../modulos/calcular_promedio.js";

//se solicita al usuario que ingrese la cantidad de notas
let cantidadNotas = Number(prompt("¿cuantas notas ingresara: "));

//se declara un arreglo llamado notas vacio para almacenar las notas
let notas = [];

//el for permite recorrer la cantidad de notas para ingresar el valor de estas y luego agregarlas al arreglo vacio 
for (let i = 0; i < cantidadNotas; i ++){
    let nota = Number(prompt(`ingrese el valor de la notra ${i+1}: `));
    notas.push(nota);
}

//la variable resultado llama a la funcion, para almacenar el resultado 
let resultado = calcularPromedio(notas);

//debe mostrar el resultado que obtuvo y la clasificacion que obtuvo
alert(`Promedio final: ${resultado.promedio} y rendimiento: ${resultado.rendimiento_aprendiz}`)

// alert(resultado);