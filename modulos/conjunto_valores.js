export const buscarELemento = (lista, elementobuscar) => {

    for(let i = 0; i < lista.length; i++){
        if(lista[i] === elementobuscar) {
            return true;
        }
        return false;
    }
}