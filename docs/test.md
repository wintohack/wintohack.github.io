<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Auditoria Web (Hacking Ético)</title>
  <style>
    .content {
      display: flex;
    }
    .text {
      flex: 1;
      padding: 20px;
    }
    .form-container {
      flex: 1;
      padding: 20px;
      border-left: 1px solid #ddd;
    }
    .image {
      margin-right: 20px;
    }
    .info {
      margin-top: 10px;
    }
    .button-container {
      display: flex;
      justify-content: center;
    }
    .custom-button {
      width: 100%;
      max-width: 300px; /* Adjust the max-width as needed */
    }
  </style>
  <script>
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
  </script>
</head>
<body>
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
    <div class="form-container">
      <div class="image">
        <img src="docs/hacker.jpg" alt="Hacker" width="300" height="300">
      </div>
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
      <div id="info" class="info"></div>
    </div>
  </div>
</body>
</html>
