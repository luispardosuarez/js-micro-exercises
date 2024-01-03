/* Escribir un programa que escriba en pantalla los divisores comunes de dos números dados */

document.getElementById('divisoresComunesForm').addEventListener('submit', function (event) {
  // Evitar que el formulario recargue la página
  event.preventDefault();

  // Obtener los números introducidos por el usuario
  const numero1 = parseInt(document.getElementById('numero1').value);
  const numero2 = parseInt(document.getElementById('numero2').value);

  // Obtener y mostrar los divisores comunes de los números en la página
  const divisoresComunes = obtenerDivisoresComunes(numero1, numero2);
  document.getElementById('resultado').innerText = `Los divisores comunes de ${numero1} y ${numero2} son: ${divisoresComunes.join(', ')}`;
});

function obtenerDivisoresComunes(numero1, numero2) {
  const divisores1 = obtenerDivisores(numero1);
  const divisores2 = obtenerDivisores(numero2);

  // Filtrar los divisores comunes de ambos números
  return divisores1.filter(divisor => divisores2.includes(divisor));
}

function obtenerDivisores(numero) {
  const divisores = [];

  for (let i = 1; i <= numero; i++) {
      if (numero % i === 0) {
          divisores.push(i);
      }
  }

  return divisores;
}



