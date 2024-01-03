/* Escribe un programa que pida una frase y escriba cuantas vocales hay en la frase */

document.getElementById('vocalesConteoForm').addEventListener('submit', function (event) {
  // Evitar que el formulario recargue la página
  event.preventDefault();

  // Obtener la frase escrita por el usuario
  const frase = document.getElementById('frase').value;

  // Contar las vocales en la frase
  const conteoVocales = contarVocales(frase);

  // Mostrar el resultado en la página
  document.getElementById('resultado').innerText = `En la frase hay ${conteoVocales} vocales.`;
});

function contarVocales(frase) {
  const vocales = ['a', 'e', 'i', 'o', 'u'];
  let conteo = 0;

  for (let i = 0; i < frase.length; i++) {
      const caracter = frase[i].toLowerCase();

      if (vocales.includes(caracter)) {
          conteo++;
      }
  }

  return conteo;
}



