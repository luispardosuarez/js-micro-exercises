/* Escribe un programa que pida el nombre del usuario con un input y escriba un texto 
que diga “Hola <nombre-de-usuario>” */

document.getElementById('saludoForm').addEventListener('submit', function (event) {
  // Evitar que el formulario recargue la página
  event.preventDefault();

  // Obtener el nombre introducido por el usuario
  const nombreUsuario = document.getElementById('nombre').value;

  // Verificar si se introdujo un nombre
  if (nombreUsuario.trim() !== '') {
      // Mostrar el saludo personalizado en la página
      document.getElementById('saludoResultado').innerText = `¡Hola ${nombreUsuario}!`;
  } 
});


