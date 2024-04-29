document.getElementById("registroForm").addEventListener("submit", function(event) {
    // Detener el envío del formulario
    event.preventDefault();
    
    // Validar los datos ingresados
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var correo = document.getElementById("correo").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    
    if (nombre === '' || edad === '' || correo === '' || fechaNacimiento === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }
    
    // Aquí puedes agregar más validaciones si lo deseas
    
    // Si todo está bien, puedes enviar el formulario
    alert('Formulario enviado correctamente!');
  });
  