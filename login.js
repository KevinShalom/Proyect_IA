$(document).ready(function() {
    $('#loginForm').submit(function(event) {
      event.preventDefault(); // Evitar que el formulario se envíe por defecto
  
      // Obtener los valores del usuario y la contraseña
      var username = $('#username').val();
      var password = $('#password').val();
  
      // Verificar las credenciales (aquí puedes implementar la lógica para verificar las credenciales del usuario)
      if (username === '123' && password === '123') {
        // Redireccionar al usuario a la página principal (index.html)
        window.location.href = 'index.html';
      } else {
        alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
      }
    });
  });