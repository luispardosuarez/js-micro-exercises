/* Escribe un programa que escriba en la pantalla “La suma de 3 + 5 es <resultado>” */

document.getElementById('sumaForm').addEventListener('submit', function (event) {
  // Evitar que el formulario recargue la página
  event.preventDefault();

  // Realizar la suma específica de 3 + 5
  const resultado = 3 + 5;

  // Mostrar el resultado en la página
  document.getElementById('resultado').innerText = `La suma de 3 + 5 es ${resultado}`;
});




