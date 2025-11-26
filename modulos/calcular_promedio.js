//se crea una fucion declarada para realizar el calculo del promdeio de los estudiantes

export function calcularPromedio (notas){

    //se declara una variable suma 
    let suma = 0; 
    
    //el for recorrera el arreglo de notas e incrementara el valor de suma en cada iteracion
    for (let i = 0; i< notas.length; i++){
        suma += notas[i];
    }

    //se declara la variable promedio la cual obtiene el resultado de suma y la divide en el numero de notas del arreglo
    let promedio = suma / notas.length;

    //la variable rendimiento_aprendiz como un string vacio para almacenar el rendimiento obtenido 
    let rendimiento_aprendiz = "";

    //se evaluara el promedio y el rendimiento que obtuvo
    if(promedio >= 4.5){
        rendimiento_aprendiz = "Alto";
    }
    else if(promedio < 4.5 && promedio >= 3.0){
        rendimiento_aprendiz = "Medio";
    }
    else {
        rendimiento_aprendiz = "Bajo"
    }

    //mostrara el promedio y el rendimiento que obtuvo el aprendiz
    return {
        Promedio:  promedio,
        Rendimiento: rendimiento_aprendiz
    }

}


