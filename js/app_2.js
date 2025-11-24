import { validarAcceso } from "../modulos/Autenticacion.js"

//se crea la variable password para almacenar la contraseña 
let password = "Empleado";

//se solicita la edad y la contraseña de acceso 
let edad = prompt("Ingrese su edad: ");
let pass = prompt("Ingrese la contraseña de acceso: ");

//
let mensaje = validarAcceso(edad, password, pass); 

alert(mensaje)
