/* Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a */

document.getElementById('conteoForm').addEventListener('submit', function (event) {
  // Evitar que el formulario recargue la página
  event.preventDefault();

  // Obtener la frase introducida por el usuario
  const frase = document.getElementById('frase').value;

  // Convertir la frase a minúsculas para contar todas las apariciones de 'a'
  const fraseEnMinusculas = frase.toLowerCase();

  // Contar cuántas veces aparece la letra 'a' en la frase
  const conteo = contarLetraA(fraseEnMinusculas);

  // Mostrar el resultado en la página
  document.getElementById('resultado').innerText = `La letra 'a' aparece ${conteo} veces en la frase.`;
});

function contarLetraA(frase) {
  let contador = 0;
  for (let i = 0; i < frase.length; i++) {
      if (frase[i] === 'a') {
          contador++;
      }
  }
  return contador;
}



