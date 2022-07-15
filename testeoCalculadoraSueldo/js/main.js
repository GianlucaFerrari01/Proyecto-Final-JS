alert("Bienvenido al sistema de asistencia al empleado")
alert("Para realizar una verificación de su sueldo siga las intrucciones:")

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
const hxd = 8.80;
const hnt = hxd * diast;
const hex = (categoria + (categoria / 2))


switch (categoria) {
    default:
        console.log("este código se ejecutará si ninguno de los casos coincide con la expresión")
    break;
    case "INGRESANTE":
        let sueldoxHoraIn = 434.82
        let valorHoraExtraIn = 652.23
        const hrexfin = valorHoraExtraIn * hex
        sueldoBruto = sueldoxHoraIn * diast + antiguedad + hrexfin;
        sueldoFinal = sueldoBruto - 19, 5 %
            alert("Su sueldo final sería:$",$[sueldoFinal] )
        break;
    case "OPERARIO CALIFICADO":
        let sueldoxHoraoc = 470.79
        let valorHoraExtraoc = 652.23
        const hrexfoc = valorHoraExtraoc * hex
        sueldoBruto = sueldoxHoraoc * diast + antiguedad + hrexfoc;
        sueldoFinal = sueldoBruto - 19, 5 %
            alert("Su sueldo final sería:$", )
        break;
    case "MEDIO OFICIAL":
        let sueldoxHoramo = 508.53
        let valorHoraExtramo = 652.23
        const hrexfmo = valorHoraExtramo * hex
        sueldoBruto = sueldoxHoramo * diast + antiguedad + hrexfmo;
        sueldoFinal = sueldoBruto - 19, 5 %
            alert("Su sueldo final sería:$", )
        break;
    case "OPERARIO ESPECIALIZADO":
        let sueldoxHoraoe = 543.60
        let valorHoraExtraoe = 652.23
        const hrexfoe = valorHoraExtraoe * hex
        sueldoBruto = sueldoxHoraoe * diast + antiguedad + hrexfoe;
        sueldoFinal = sueldoBruto - 19, 5 %
            alert("Su sueldo final sería:$", )
        break;
    case "OPERARIO ESPDO MÚLTIPLE":
        let sueldoxHoraoem = 574.83
        let valorHoraExtraoem = 652.23
        const hrexfoem = valorHoraExtraoem * hex
        sueldoBruto = sueldoxHoraoem * diast + antiguedad + hrexfoem;
        sueldoFinal = sueldoBruto - 19, 5 %
            alert("Su sueldo final sería:$", )
        break;
    case "OFICIAL":
        let sueldoxHorao = 602.41
        let valorHoraExtrao = 652.23
        const hrexfo = valorHoraExtrao * hex
        sueldoBruto = sueldoxHorao * diast + antiguedad + hrexfo;
        sueldoFinal = sueldoBruto - 19, 5 %
            alert("Su sueldo final sería:$", )
        break;
    case "OFICIAL MÚLTIPLE":
        let sueldoxHoraom = 647.80
        let valorHoraExtraom = 652.23
        const hrexfom = valorHoraExtraom * hex
        sueldoBruto = sueldoxHoraom * diast + antiguedad + hrexfom;
        sueldoFinal = sueldoBruto - 19, 5 %
            alert("Su sueldo final sería:$", )
        break;
    
}