sistema()

function sistema() {
  let precioProducto = Number(prompt("Ingresa el valor de tu producto:"))
  let cantidadCuotas = Number(prompt(`Ingresa la cantidad de cuotas:
                                            3
                                            6
                                            12
                                            15
                                            24`))
  cuotas(precioProducto, cantidadCuotas)
}

function cuotas(precio, cuotas) {
  let precioCuota;
  let interes;
  if (cuotas === 3) {
    precioCuota = precio / 3
  } else if (cuotas === 6) {
    precioCuota = precio / 6
    interes = precioCuota +  21.8 / 100
  }else if (cuotas === 9) {
    precioCuota = 30.123% + (precio / 9)
  } else if (cuotas === 12) {
    precioCuota = 37.39% + (precio / 12)
  } else {
    alert("Operación Invalida")
  }
  alert(`El precio por cuota es de: ${interes}`)
}