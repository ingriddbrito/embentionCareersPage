class CareersPage {
  emailBx() {
    return cy.get('input[name="your-email"]');
  }

  checkBox() {    
    return cy.get('.wpcf7-list-item-label')
    
  }

  submitBtn() {
    return cy.get(
      "#wpcf7-f280-o1 > .wpcf7-form > .uacf7-form-280 > .uacf7-form-280 > .wpcf7-form-control"
    );
  }

  confirmationMsg() {
    return cy
      .get(".wpcf7-response-output")
      .should("have.text", "Gracias por tu mensaje. Ha sido enviado");
  }
}

export default CareersPage;
