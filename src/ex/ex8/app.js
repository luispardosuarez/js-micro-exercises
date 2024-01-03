/* Escribe un programa que pida una frase y escriba las vocales que aparecen */

document.getElementById('vocalesForm').addEventListener('submit', function (event) {
  // Evitar que el formulario recargue la página
  event.preventDefault();

  // Obtener la frase introducida por el usuario
  const frase = document.getElementById('frase').value;

  // Encontrar y mostrar las vocales en la frase
  const vocalesEncontradas = encontrarVocales(frase);

  // Mostrar el resultado en la página
  document.getElementById('resultado').innerText = `Las vocales en la frase son: ${vocalesEncontradas.join(', ')}`;
});

function encontrarVocales(frase) {
  const vocales = ['a', 'e', 'i', 'o', 'u'];
  const vocalesEncontradas = [];

  for (let i = 0; i < frase.length; i++) {
      const caracter = frase[i].toLowerCase();

      if (vocales.includes(caracter) && !vocalesEncontradas.includes(caracter)) {
          vocalesEncontradas.push(caracter);
      }
  }

  return vocalesEncontradas;
}



