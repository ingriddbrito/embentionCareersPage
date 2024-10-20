# Automación de Contact us page

### Error en el JS de la pagina
1. Cuando Cypress  navegó al sitio web de Embention, la prueba Cypress falló, porque hay un error de JS en la página de Embention. Puede verificar en devtools el error: Uncaught SyntaxError: Unexpected end of input.
Aunque esto puede no ser crítico, puede generar un comportamiento inesperado, funcionalidades defectuosas o incluso que partes de la página web no se carguen correctamente.
Entonces, para superar este error y lograr que las pruebas de Cypress pasen, agregué lo siguiente en mi command.js

```csharp
Cypress.on('uncaught:exception', (err, runnable) => {
  // Optional: Log the error
  console.error('Uncaught exception:', err);

  // Prevent Cypress from failing the test
  return false;
});
```

 2. Error cuando Cypress envía un correo electrónico. Este error no ocurre cuando se ingresa el correo electrónico manualmente. Esto se debe a un error de JavaScript en la aplicación
