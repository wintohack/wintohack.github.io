# **Auditorías de Ciberseguridad para Pymes**

<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WintoHack</title>
  <link rel="stylesheet" href="docs/styles.css">
</head>

<body>

  <header>
        <div class="logo">
            <img src="images/logo.jpg" alt="Logo de la Empresa" height="160" weight="25" >
        </div>
        <nav>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#comentarios">Comentarios</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>


    <script src="docs/scripts.js"></script>

    

<section id="servicios" class="container">
  <div class="content">
    <div class="text">
      <h1>Auditoria Web (Hacking Ético)</h1>
      <blockquote>
        <p><strong>¿Qué es una Auditoría Web (Hacking Ético)?</strong></p>
        <p>Nuestra auditoría web de hacking ético (un aplicativo) es una evaluación exhaustiva diseñada para asegurar la máxima protección de tu sitio web. Realizada por hackers éticos expertos, utilizamos las mismas técnicas avanzadas que los hackers malintencionados, pero con un solo objetivo: mejorar la seguridad de tu sitio.</p>
      </blockquote>
      <blockquote>
        <p><strong>Beneficios para tu PYME:</strong></p>
        <ul>
          <li><strong>Protección Proactiva:</strong> Identificamos y corregimos vulnerabilidades antes de que sean explotadas.</li>
          <li><strong>Cumplimiento Normativo:</strong> Asegura que tu empresa cumpla con las normativas de seguridad y privacidad.</li>
          <li><strong>Confianza del Cliente:</strong> Aumenta la confianza de tus clientes demostrando un compromiso serio con la seguridad.</li>
          <li><strong>Evita Costos:</strong> Reduce el riesgo de costosos incidentes de seguridad y pérdida de datos.</li>
        </ul>
      </blockquote>

      <h1>Test de Intrusión de Hacking Etico</h1>
      <blockquote>
        <p><strong>¿Qué es un Test de Intrusión Externo (Hacking Ético)?</strong></p>
        <p>Nuestro servicio de Test de Intrusion Externo le permitirá conocer su perímetro de exposición, adquiriendo una foto clara de sus vulnerabilidades expuestas y de cómo ponerles solución antes de que las encuentren los cibercriminales.</p>
      </blockquote>
      <blockquote>
        <p><strong>Beneficios para tu PYME:</strong></p>
        <ul>
          <li><strong>Protección Proactiva:</strong> Identificamos y corregimos vulnerabilidades antes de que sean explotadas.</li>
          <li><strong>Cumplimiento Normativo:</strong> Asegura que tu empresa cumpla con las normativas de seguridad y privacidad.</li>
          <li><strong>Confianza del Cliente:</strong> Aumenta la confianza de tus clientes demostrando un compromiso serio con la seguridad.</li>
          <li><strong>Evita Costos:</strong> Reduce el riesgo de costosos incidentes de seguridad y pérdida de datos.</li>
        </ul>
      </blockquote>
    </div>
    <div class="form-info-container">
      <div class="form-container">
        <div class="image">
          <img src="docs/hacker.jpg" alt="Hacker" width="350" height="400">
        </div>

           <tr>
    <span class="price original-price">€3.050,00 EUR</span>
    <span class="price">€2.750,00 EUR</span>
    <span class="offer-badge">Oferta</span>
            </tr>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="7LP3R7NTV69QA" />
                   
          <table>
            <tr>

              <td>
                <input type="hidden" name="on0" value="Tipo de Pentest"/>
                Tipo de Pentest
              </td>
            </tr>
            <tr>
              <td>
                <select name="os0" onchange="updateInfo()">
                  <option value="Auditoria Web (un aplicativo)">
                    Auditoria Web (un aplicativo) 2.750,00 € EUR
                  </option>
                  <option value="Test de Intrusion Externo">
                    Test de Intrusion Externo 6.700,00 € EUR
                  </option>
                </select>
              </td>
            </tr>
          </table>
          <input type="hidden" name="currency_code" value="EUR" />
          <div class="button-container">
            <input type="image" class="custom-button" src="docs/paypal.png" border="0" name="submit" title="Pagar ahora" alt="Comprar ahora" />
          </div>
        </form>
      </div>
      <div id="info" class="info"></div>
    </div>
  </div>
</section>


<main>
        <section id="comentarios" class="container">
            <h1>Comentarios de Clientes</h1>
            <div class="comentarios-lista" id="comentariosLista"></div>
        </section>




<section id="contacto" class="container">
    <h2>Contacto</h2>
    <form id="contactForm">
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="mensaje">Consulta:</label>
        <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
        
        <button type="submit">Enviar</button>
    </form>
</section>
</main>


<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
    (function() {
        emailjs.init('YOUR_USER_ID'); // Reemplaza 'YOUR_USER_ID' con tu user ID de EmailJS
    })();
</script>


  
      <footer>
        <p>&copy; 2024 WinToHack - Auditorías de Hacking Ético para Pymes. Todos los derechos reservados.</p>
    </footer>
</body>
</html>

