export const validarAcceso = function(edad,password,pass){
    
    //condicion si cumple con la edad y con la contraseña
    if(edad >= 18 && pass === password){
        return ("Acceso concedido");
    }
    
    //condicion si cumple con la edad pero la contraseña no es correcta
    if(edad >= 18 && pass !== password){
        return ("Acceso denegado, La contraseña no es correcta, intenta de nuevo");
        
    }
        return("Acceso denegado, No puedes ingresar")
    
}