sistema()
const cuotasDisp = " 3 , 6 , 12 , 15 , 24"
  function sistema()
  {
    let valorPr = Number (prompt("Ingresa el valor de tu producto:"))
    let valorCuotas = Number (prompt(`Ingresa la cantidad de cuotas:
                                            3
                                            6
                                            12
                                            15
                                            24`))
  }
cuotas()
 function cuotas()
 {
    if (valCuotas === 3) 
  {
    precioCuota = valPr/3
    alert("El precio por cuota queda en:", precioCuota )
    
  }
  else if(cuotas===6)
  {
    console.log(`El precio por cuota le queda en:" , ${valorPr/cuotas}` )
  }
  else if(cuotas===12)
  {
    console.log("El precio por cuota le queda en:" , precioCuota )
  }
  else if(cuotas===15)
  {
    precioCuota = valorPr / cuotas
    console.log("El precio por cuota le queda en:" , precioCuota )
  }
  else if (cuotas===24) 
  {
    precioCuota = valorPr / cuotas
    console.log("El precio por cuota le queda en:" , precioCuota )
  }
  else {
    alert("Operación Invalida")
  }
 }
  
    


