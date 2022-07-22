alert("Bienvenido al sistema de asistencia al empleado")
alert("Para realizar una verificación de su sueldo siga las intrucciones:")

interfaz()

function interfaz () {
    let categoria = prompt(`Ingrese su categoría:
    INGRESANTE
    OPERARIO CALIFICADO
    MEDIO OFICIAL
    OPERARIO ESPECIALIZADO
    OPERARIO ESPDO MÚLTIPLE
    OFICIAL
    OFICIAL MÚLTIPLE`);
    
    let antiguedad = Number(prompt("Ingrese su antiguedad:"))
    let diast = Number(prompt("Días trabajados:"))
    let hext = Number(prompt("Horas extras trabajadas:"))
    const hex = (categoria + (categoria / 2))

    calculadora( categoria,antiguedad,diast,hext,hex)

}

function calculadora(categoria,antiguedad,diast,hex) {
    let hnorfin;
    let hrexfin;
    let sueldoNormal;
    let sueldoMasExtras;
    let sueldoFinal;
    switch (categoria) {
        case 'INGRESANTE': {
            let sueldoxHoraIn = 434.82
            let valorHoraExtraIn = 652.23
            hnorfin = 8.8 * diast
            hrexfin = valorHoraExtraIn * hex
            sueldoNormal = sueldoxHoraIn * hnorfin;
            sueldoMasExtras = sueldoNormal + hrexfin;
            sueldoFinal = sueldoMasExtras;
                break;
        }
        case 'OPERARIO CALIFICADO': {
            let sueldoxHoraOc = 470.79;
            let valorHoraExtraoc = 706.185;
            hnorfin = 8.8 * diast;
            hrexfin = valorHoraExtraoc * hex;
            sueldoNormal = sueldoxHoraOc * hnorfin;
            sueldoMasExtras = sueldoNormal + hrexfin;
            sueldoFinal = sueldoMasExtras;
                break;
        }
        case 'MEDIO OFICIAL': {
            let sueldoxHoramo = 508.53;
            let valorHoraExtramo = 762.79;
            hnorfin = 8.8 * diast;
            hrexfin = valorHoraExtramo * hex;
            sueldoNormal = sueldoxHoramo * hnorfin;
            sueldoMasExtras = sueldoNormal + hrexfin;
            sueldoFinal = sueldoMasExtras;
                break;
        }
        case 'OPERARIO ESPECIALIZADO': {
            let sueldoxHoraoe = 543.60;
            let valorHoraExtraoe = 815.4;
            hnorfin = 8.8 * diast;
            hrexfin = valorHoraExtraoe * hex;
            sueldoNormal = sueldoxHoraoe * hnorfin;
            sueldoMasExtras = sueldoNormal + hrexfin;
            sueldoFinal = sueldoMasExtras;
                break;
        }
        case 'OPERARIO ESPDO MÚLTIPLE': {
            let sueldoxHoraoem = 574.83;
            let valorHoraExtraoem = 926.14;
            hnorfin = 8.8 * diast;
            hrexfin = valorHoraExtraoem * hex;
            sueldoNormal = sueldoxHoraoem * hnorfin;
            sueldoMasExtras = sueldoNormal + hrexfin;
            sueldoFinal = sueldoMasExtras;
                break;
        }
        case 'OFICIAL': {
            let sueldoxHorao = 602.41;
            let valorHoraExtrao = 903.61;
            hnorfin = 8.8 * diast;
            hrexfin = valorHoraExtrao* hex;
            sueldoNormal = sueldoxHorao * hnorfin;
            sueldoMasExtras = sueldoNormal + hrexfin;
            sueldoFinal = sueldoMasExtras;
                break;
        }
        case 'OFICIAL MÚLTIPLE': {
            let sueldoxHoraom = 647.80;
            let valorHoraExtraom = 971.7;
            hnorfin = 8.8 * diast;
            hrexfin = valorHoraExtraom * hex;
            sueldoNormal = sueldoxHoraom * hnorfin;
            sueldoMasExtras = sueldoNormal + hrexfin;
            sueldoFinal = sueldoMasExtras;
                break;
        }
        default: {
            alert("este código se ejecutará si ninguno de los casos coincide con la expresión")
            break;
        }
    }
    alert(`Su sueldo final sería: $${sueldoFinal}`)

}