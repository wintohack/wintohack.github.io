
    function updateInfo() {
      var select = document.getElementsByName('os0')[0];
      var info = document.getElementById('info');
      var selectedOption = select.options[select.selectedIndex].value;
      
      if (selectedOption === "Auditoria Web (un aplicativo)") {
        info.innerHTML = '<a href="https://wintohack.github.io/docs/auditoria_web.html" target="_blank">Información sobre Auditoria Web (un aplicativo)</a>';
      } else if (selectedOption === "Test de Intrusion Externo") {
        info.innerHTML = '<a href="https://wintohack.github.io/docs/test_intrusion_externo.html" target="_blank">Información sobre Test de Intrusión Externo</a>';
      } else {
        info.innerHTML = '';
      }
    }

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        email: email,
        message: mensaje
    }).then(function(response) {
        alert('Mensaje enviado con éxito!');
        contactForm.reset();
    }, function(error) {
        alert('Error al enviar el mensaje.');
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const comentarios = [
        {
            nombre: "Juan Pérez",
            mensaje: "El servicio de auditoría de hacking ético fue excelente. Identificaron vulnerabilidades críticas que otros no encontraron."
        },
        {
            nombre: "María Gómez",
            mensaje: "Muy profesionales y detallados en su trabajo. Recomiendo sus servicios al 100%."
        },
        {
            nombre: "Carlos López",
            mensaje: "Gracias a su auditoría, pudimos fortalecer nuestra seguridad informática significativamente. Gran equipo de trabajo."
        },
        {
            nombre: "Ana Martínez",
            mensaje: "Servicio rápido y eficiente. Nos proporcionaron un informe detallado y recomendaciones claras."
        }
    ];

    const comentariosLista = document.getElementById("comentariosLista");

    comentarios.forEach(comentario => {
        const comentarioDiv = document.createElement("div");
        comentarioDiv.classList.add("comentario");

        const nombre = document.createElement("div");
        nombre.classList.add("nombre");
        nombre.textContent = comentario.nombre;

        const mensaje = document.createElement("div");
        mensaje.classList.add("mensaje");
        mensaje.textContent = comentario.mensaje;

        comentarioDiv.appendChild(nombre);
        comentarioDiv.appendChild(mensaje);

        comentariosLista.appendChild(comentarioDiv);
    });
});
