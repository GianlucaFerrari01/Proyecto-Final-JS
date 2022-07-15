alert ("Bienvenido al sistema de asistencia al empleado")
alert ("Para realizar una verificación de su sueldo siga las intrucciones:")

let categoria = prompt(`Ingrese su categoría:
                                INGRESANTE
                                OPERARIO CALIFICADO
                                MEDIO OFICIAL
                                OPERARIO ESPECIALIZADO
                                OPERARIO ESPDO MÚLTIPLE
                                OFICIAL
                                OFICIAL MÚLTIPLE`);
let antiguedad = Number(prompt("Ingrese su antiguedad:"))
let diast = Number (prompt("Días trabajados:"))
let hext = Number (prompt("Horas extras trabajadas:"))
const operacionSueldo=""
const hxd = 8.80;
const hnt = hxd * diast;
const hex = (categoria + (categoria/2)) 
const hrexf = hext * hex
calculadora(operacionSueldo)
function calculadora(operacionSueldo) {
    switch (operacionSueldo) {
        case "INGRESANTE":
            sueldoBruto= hnt + antiguedad + hrexf;
            sueldoFinal= sueldoBruto - 19,5% 
            console.log("Su sueldo final sería:",sueldoFinal)
            break;/*
        case "OPERARIO CALIFICADO":
            restar(numero1, numero2)
            break;
        case "MEDIO OFICIAL":
            dividir(numero1, numero2)
            break;
        case "OPERARIO ESPECIALIZADO":
            multiplicar(numero1, numero2)
            break;
        case "OPERARIO ESPDO MÚLTIPLE":
            multiplicar(numero1, numero2)
            break;
        case "OFICIAL":
            
            break;
        case "OFICIAL MÚLTIPLE":
            
            break;*/
    }
}
