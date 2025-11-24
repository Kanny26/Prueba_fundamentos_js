export function calcularImpuestoUnitario(valor, porcentaje){
    return (valor * porcentaje) / 100;
}

export const procesarImpuestos = function(){
    let cantidad = Number(prompt("Ingrese la cantidad de producto: ")); 
    let totalImpuesto = 0;

    for(let i = 1; i <= cantidad; i++){
        let valor = Number(prompt(`ingrese el valor del producto ${i}: `));
        let porcentaje = Number(prompt(`ingrese el porcentaje de impuesto del producto: ${i}: `));
        let impuesto = calcularImpuestoUnitario(valor,porcentaje);
        totalImpuesto += impuesto;
    }

    return totalImpuesto; 
}