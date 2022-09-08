cargarPreferencias();
programarBotones();

function cargarPreferencias() {
    const mode = localStorage.getItem("mode")
    if (mode) //mode !=== null, undefined, 0, false, ""
    {
        cambiarModo(mode);
    }
}

function programarBotones() {
    programarModo("dark");
    programarModo("ligth");
}

function programarModo(modo) {
    const boton = document.getElementById(`${modo}Mode`);
    boton.addEventListener("click", () => {
        cambiarModo(modo);
    })

}

function cambiarModo(modo) {
    if (modo === 'dark') {
        document.body.setAttribute("style", "background-color:#15202B;color:white");
    } else if (modo === 'ligth') {
        document.body.setAttribute("style", "background-color:white;color:black");
    }
    localStorage.setItem("mode", modo);

}
