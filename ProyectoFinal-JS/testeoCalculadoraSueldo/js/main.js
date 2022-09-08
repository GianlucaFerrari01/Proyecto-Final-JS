function calculadora(categorias, diasT, hexT) {
    let hnorfin;
    let hrexfin;
    let sueldoxHora;
    let valorHoraExtra;
    let sueldoNormal;
    let sueldoFinal;
    switch (categorias) {
        
        case 'INGRESANTE': {
            let sueldoxHora = 434.82
            let valorHoraExtra = 652.23
            break;
        }
        case 'OPERARIO CALIFICADO': {
            let sueldoxHora = 470.79;
            let valorHoraExtra = 706.185;
            break;
        }
        case 'MEDIO OFICIAL': {
            let sueldoxHora = 508.53;
            let valorHoraExtra = 762.79;
            break;
        }
        case 'OPERARIO ESPECIALIZADO': {
            let sueldoxHora = 543.60;
            let valorHoraExtra = 815.4;
            break;
        }
        case 'OPERARIO ESPDO MÚLTIPLE': {
            let sueldoxHora = 574.83;
            let valorHoraExtra = 926.14;
            break;
        }
        case 'OFICIAL': {
            let sueldoxHora = 602.41;
            let valorHoraExtra = 903.61;
            break;
        }
        case 'OFICIAL MÚLTIPLE': {
            let sueldoxHora = 647.80;
            let valorHoraExtra = 971.7;
            break;
        }
        default: {
            alert("este código se ejecutará si ninguno de los casos coincide con la expresión")
            break;
        }
    }
    hnorfin = 8.8 * diasT;
    hrexfin = valorHoraExtra* hexT;
    sueldoNormal = sueldoxHora * hnorfin;
    sueldoMasExtras = sueldoNormal + hrexfin;
    sueldoFinal = sueldoMasExtras;

    salida(sueldoFinal)
}

function salida (sueldoFinal) {

    const nodoSueldo = document.getElementsByID("resultado");

    for(let nodo of nodoSueldo)
    {
        nodo.innerText=`$ ${sueldoFinal}`;
    }

}