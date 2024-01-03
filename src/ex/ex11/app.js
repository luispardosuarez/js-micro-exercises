/* Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 
   (sólo hay que comprobar si lo es por uno de los cuatro) */

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
      let mensaje = `El número ${numero} `;
  
      if (numero % 2 === 0) {
          return mensaje + 'es divisible por 2.';
      }
  
      if (numero % 3 === 0) {
          return mensaje + 'es divisible por 3.';
      }
  
      if (numero % 5 === 0) {
          return mensaje + 'es divisible por 5.';
      }
  
      if (numero % 7 === 0) {
          return mensaje + 'es divisible por 7.';
      }
  
      return mensaje + 'no es divisible por 2, 3, 5 ni 7.';
  }
  
  
  


