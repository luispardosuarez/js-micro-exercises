/* Escribir un programa que escriba en pantalla los divisores de un número dado */

document.getElementById('divisoresForm').addEventListener('submit', function (event) {
  // Evitar que el formulario recargue la página
  event.preventDefault();

  // Obtener el número introducido por el usuario
  const numero = parseInt(document.getElementById('numero').value);

  // Obtener y mostrar los divisores del número en la página
  const divisores = obtenerDivisores(numero);
  document.getElementById('resultado').innerText = `Los divisores de ${numero} son: ${divisores.join(', ')}`;
});

function obtenerDivisores(numero) {
  const divisores = [];

  for (let i = 1; i <= numero; i++) {
      if (numero % i === 0) {
          divisores.push(i);
      }
  }

  return divisores;
}



