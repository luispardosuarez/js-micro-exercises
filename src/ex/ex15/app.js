/* Escribir un programa que nos diga si un número dado es primo 
   (no es divisible por ninguno otro número que no sea él mismo o la unidad)*/

   document.getElementById('primoForm').addEventListener('submit', function (event) {
      // Evitar que el formulario recargue la página
      event.preventDefault();
  
      // Obtener el número introducido por el usuario
      const numero = parseInt(document.getElementById('numero').value);
  
      // Determinar si el número es primo y mostrar el resultado en la página
      const esPrimo = determinarPrimo(numero);
      document.getElementById('resultado').innerText = `El número ${numero} ${esPrimo ? 'es' : 'no es'} primo.`;
  });
  
  function determinarPrimo(numero) {
      if (numero <= 1) {
          return false;
      }
  
      // Verificar si el número es divisible por algún número menor que él
      for (let i = 2; i < numero; i++) {
          if (numero % i === 0) {
              return false;
          }
      }
  
      // Si no fue divisible por ningún número menor, entonces es primo
      return true;
  }
  


