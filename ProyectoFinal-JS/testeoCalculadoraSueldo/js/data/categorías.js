function traerData() {
   fetch('categorias.json')
      .then(res => res.json())
      .then(datos => {
         console.log(datos)
         //dataC(datos)
      })
}

//function dataC(datos) {
  // console.log(datos)
//}


//categoria.forEach(c => {
// let option = document.createElement("option");
//option.name = "categoria";
//option.innerText = c.name;
//option.value = c.id;
//option.value = c;
//document.getElementById("lista").appendChild(option)
//})