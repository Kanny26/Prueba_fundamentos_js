import { buscarELemento } from "../modulos/conjunto_valores.js";

let cantidad = Number(prompt("¿Cuantos elementos se almacenaran?"));
let lista = []; 

for (let i = 1; i <= cantidad; i++){
    let valor = prompt(`Ingrese el elemento ${i}: `);
    lista.push(valor);
}

let elementobuscar = prompt("ingresa el elemento a buscar: ")

let encontrado = buscarELemento(lista, elementobuscar);

if(encontrado) {
    alert(`El elemento ${elementobuscar} se encuentra en la lista`);
}else {
    alert(`El elemento ${elementobuscar} no se encuentra en la lista. `);
}

console.log("Este es el arreglo: ", lista);
console.log("Elemento buscado: ", elementobuscar);
console.log("Encontrado: ", encontrado);