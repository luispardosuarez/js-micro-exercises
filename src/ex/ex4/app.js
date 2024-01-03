/* Escribe un programa que pida dos números y escriba “La suma de <numero-uno> 
con <numero-dos> es <resultado>" */

document.getElementById('sumaForm').addEventListener('submit', function (event) {
  // Evitar que el formulario recargue la página
  event.preventDefault();

  // Obtener los valores introducidos por el usuario
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);

  // Verificar si los valores son números válidos
  if (!isNaN(num1) && !isNaN(num2)) {
      // Calcular la suma
      const suma = num1 + num2;

      // Mostrar el resultado en la página
      document.getElementById('resultado').innerText = `La suma de ${num1} con ${num2} es ${suma}`;
  } 
});



