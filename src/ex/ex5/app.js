/* Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor */

document.getElementById('comparacionForm').addEventListener('submit', function (event) {
  // Evitar que el formulario recargue la página
  event.preventDefault();

  // Obtener los valores introducidos por el usuario
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);

  // Verificar si los valores son números válidos
  if (!isNaN(num1) && !isNaN(num2)) {
      // Comparar los números y mostrar el resultado en la página
      if (num1 > num2) {
          document.getElementById('resultado').innerText = `${num1} es mayor que ${num2}`;
      } else if (num1 < num2) {
          document.getElementById('resultado').innerText = `${num2} es mayor que ${num1}`;
      } else {
          document.getElementById('resultado').innerText = 'Ambos números son iguales';
      }
  }
});



