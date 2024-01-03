/* Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales */

document.getElementById('vocalesConteoForm').addEventListener('submit', function (event) {
  // Evitar que el formulario recargue la página
  event.preventDefault();

  // Obtener la frase escrita por el usuario
  const frase = document.getElementById('frase').value;

  // Contar las vocales en la frase
  const conteoVocales = contarVocales(frase);

  // Mostrar el resultado en la página
  document.getElementById('resultado').innerText = `En la frase hay:\nA: ${conteoVocales.a}\nE: ${conteoVocales.e}\nI: ${conteoVocales.i}\nO: ${conteoVocales.o}\nU: ${conteoVocales.u}`;
});

function contarVocales(frase) {
  const vocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };

  for (let i = 0; i < frase.length; i++) {
      const caracter = frase[i].toLowerCase();

      if (vocales.hasOwnProperty(caracter)) {
          vocales[caracter]++;
      }
  }

  return vocales;
}



