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
  if (cuotas === 3) {
    precioCuota = precio / 3
  } else if (cuotas === 6) {
    precioCuota = precio / 6
  } else if (cuotas === 12) {
    precioCuota = precio / 12
  } else if (cuotas === 15) {
    precioCuota = precio / 15
  } else if (cuotas === 24) {
    precioCuota = precio / 24
  } else {
    alert("Operación Invalida")
  }
  alert(`El precio por cuota es de: ${precioCuota}`)
}