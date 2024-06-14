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
