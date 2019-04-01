import {createRandomString} from '../../utils';
  const newUserName = `${createRandomString(8, 'en')}`;

describe('Authorization', function () {
  const data = Cypress.env('default')
    data.email = `t${Date.now()}@mailforspam.com`

    afterEach(() => {
      cy.deleteUser(data)
    })

  it('Registration', function () {

    cy.visit('http://bosch.perets-ace.com/')

    cy.contains('Вход')
      .click()

    cy.get('#register_firstname')
      .type(newUserName)

    cy.get('#register_lastname')
      .type(newUserName)

    cy.get('#register_email')
      .type(data.email)

    cy.get('#register_telephone')
      .type(data.telephone)

    cy.get('#register_password')
      .type(data.password)

    cy.get('#register_confirm_password')
      .type(data.confirmpassword)

    cy.get('.checkbox')
      .contains('Подписаться на рассылку новостей')
      .click()

    cy.contains('Зарегистрироваться').click()

    cy.contains('Ваша учётная запись создана!')

  })

  // it.only('Registration-email with spaces', function () {
  //   data.email = `test${Date.now()}@mailforspam.com`
  //   cy.visit('http://bosch.perets-ace.com/')

  //   cy.contains('Вход')
  //     .click()

  //   cy.get('#register_firstname')
  //     .type(data.firstname)

  //   cy.get('#register_lastname')
  //     .type(data.lastname)

  //   cy.get('#register_email')
  //     .type(data.email)

  //   cy.get('#register_telephone')
  //     .type(data.telephone)

  //   cy.get('#register_password')
  //     .type(data.password)

  //   cy.get('#register_confirm_password')
  //     .type(data.confirmpassword)

  //   cy.contains('Зарегистрироваться').click()

  //   cy.contains('Ваша учётная запись создана!')

  // })

})