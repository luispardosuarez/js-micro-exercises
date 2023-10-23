/* Escribe un programa que escriba en la pantalla “La suma de 3 + 5 es <resultado>”. */

// Crear dos variables para los números 
// imprimir el dato en etiqueta h1 en el DOM

const title = "Hello Javasript";
const titleSection = document.getElementById('title');

function printTitle(){
    titleSection.innerHTML = /* html */ `
    <h1>${title}</h1>
    `
}

printTitle ()