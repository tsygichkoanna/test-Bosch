Cypress.Commands.add('deleteUser', (data) => {
    cy.visit('http://bosch.perets-ace.com/admin')

    cy.get('#input-username')
        .type('admin')

    cy.get('#input-password')
        .type('1qaz')

    cy.get('button')
        .click()

    cy.get('#button-menu')
        .click()

    cy.get('#menu-customer')
        .click()

    cy.get('#menu-customer>ul>li>a')
        .contains('Покупатели')
        .click()

    cy.get('form tr')
        .contains(data.email.replace(/\s/g, ''))
        .parent()
        .find('[name="selected[]"]')
        .check()

    cy.get('.container-fluid>.pull-right>button')
        .click()
})

// Тест выполняется медленее
//   const COMMAND_DELAY = 2000;

//   for (const command of ['visit', 'click', 'trigger', 'type', 'clear', 'reload', 'contains']) {
//       Cypress.Commands.overwrite(command, (originalFn, ...args) => {
//           const origVal = originalFn(...args);

//          return new Promise((resolve) => {
//               setTimeout(() => {
//                   resolve(origVal);
//               }, COMMAND_DELAY);
//           })
//       })
//   }