/* Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible 
   (hay que decir todos por los que es divisible) */

   document.getElementById('divisibilidadForm').addEventListener('submit', function (event) {
      // Evitar que el formulario recargue la página
      event.preventDefault();
  
      // Obtener el número introducido por el usuario
      const numero = parseInt(document.getElementById('numero').value);
  
      // Comprobar la divisibilidad y mostrar el resultado en la página
      const resultado = comprobarDivisibilidad(numero);
      document.getElementById('resultado').innerText = resultado;
  });
  
  function comprobarDivisibilidad(numero) {
      let mensaje = `El número ${numero} es divisible por `;
  
      let divisoresEncontrados = [];
  
      if (numero % 2 === 0) {
          divisoresEncontrados.push(2);
      }
  
      if (numero % 3 === 0) {
          divisoresEncontrados.push(3);
      }
  
      if (numero % 5 === 0) {
          divisoresEncontrados.push(5);
      }
  
      if (numero % 7 === 0) {
          divisoresEncontrados.push(7);
      }
  
      if (divisoresEncontrados.length > 0) {
          return mensaje + divisoresEncontrados.join(', ') + '.';
      } else {
          return mensaje + 'ninguno de los cuatro.';
      }
  }
  


