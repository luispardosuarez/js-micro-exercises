/* Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres */

document.getElementById('comparacionForm').addEventListener('submit', function (event) {
  // Evitar que el formulario recargue la página
  event.preventDefault();

  // Obtener los valores introducidos por el usuario
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const num3 = parseFloat(document.getElementById('num3').value);

  // Verificar si los valores son números válidos
  if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
      // Encontrar el mayor de los tres números y mostrar el resultado en la página
      if (num1 >= num2 && num1 >= num3) {
          document.getElementById('resultado').innerText = `${num1} es el mayor de los tres números.`;
      } else if (num2 >= num1 && num2 >= num3) {
          document.getElementById('resultado').innerText = `${num2} es el mayor de los tres números.`;
      } else {
          document.getElementById('resultado').innerText = `${num3} es el mayor de los tres números.`;
      }
  }
});



