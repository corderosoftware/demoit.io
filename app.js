
function Cambia(){

    // Obtener el elemento con id "titulo"
    var tituloElemento = document.getElementById("titulo");

    console.log(tituloElemento.innerHTML);

    // Manipular el elemento obtenido
    tituloElemento.innerHTML = "¡Hola desde JavaScript!";
    tituloElemento.style.color = "blue";

}

class HeaderComponent {
    constructor(parentElement) {
        this.parentElement = parentElement;
    }

    render() {
        const headerHTML = `
            <header>
                <h1>Mi Aplicación</h1>
            </header>
        `;
        this.parentElement.innerHTML = headerHTML;
    }
}