---
permalink: /
---
# **Documentation**
> How this project works and how to maintain your own

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulario de PayPal</title>
  <style>
    .form-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
  </style>
</head>
<body>
  <div class="form-container">
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
            <select name="os0">
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
      <input type="image" src="https://www.paypalobjects.com/es_ES/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal, la forma rápida y segura de pagar en Internet." alt="Comprar ahora" />
    </form>
  </div>
</body>
</html>



## Información Tipos de Pentest

- [Auditoría Web (un aplicativo)](auditoria_web.md)
- [Test de Intrusión Externo](test_intrusion_externo.md)




