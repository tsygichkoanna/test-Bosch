import { createRandomString } from '../../utils';
const newUserName = `test${createRandomString(8, 'ru')}`;

describe('Testbasket', function () {
  const data = Cypress.env('default')
  data.email = `t${Date.now()}@mailforspam.com`

  it('NP cashless payments', function () {
    cy.visit('http://bosch.perets-ace.com/')

    cy.contains('Купить')
      .click()

    cy.get('#basket')
      .find('button')
      .click()

    cy.get('.cart')
      .click()

    cy.contains('ОФОРМИТЬ ЗАКАЗ')
      .click()

    cy.get('#customer_lastname')
      .type(newUserName)

    cy.get('#customer_firstname')
      .type(data.firstname)

    cy.get('#customer_email')
      .type(data.email)

    cy.get('#customer_telephone')
      .type(data.telephone)

    cy.get('#shipping_address_city')
      .type(data.city)

    cy.get('#shipping_address_postcode')
      .type(data.department)

    cy.contains('Оформить заказ')
      .click()

    cy.contains('Ваш заказ сформирован')
  })

  it('NP Privat Bank', function () {
    cy.visit('http://bosch.perets-ace.com/')

    cy.contains('Купить')
      .click()

    cy.get('#basket')
      .find('button')
      .click()

    cy.get('.cart')
      .click()

    cy.contains('ОФОРМИТЬ ЗАКАЗ')
      .click()

    cy.get('#customer_lastname')
      .type(newUserName)

    cy.get('#customer_firstname')
      .type(newUserName)

    cy.get('#customer_email')
      .type(data.email)

    cy.get('#customer_telephone')
      .type(data.telephone)

    cy.get('#shipping_address_city')
      .type(data.city)

    cy.get('#shipping_address_postcode')
      .type(data.department)

    cy.get('#cheque')
      .click()

    cy.contains('Оформить заказ')
      .click()

    cy.contains('Ваш заказ сформирован')
  })

  it('NP Payment upon receipt at the office', function () {
    cy.visit('http://bosch.perets-ace.com/')

    cy.contains('Купить')
      .click()

    cy.get('#basket')
      .find('button')
      .click()

    cy.get('.cart')
      .click()

    cy.contains('ОФОРМИТЬ ЗАКАЗ')
      .click()

    cy.get('#customer_lastname')
      .type(newUserName)

    cy.get('#customer_firstname')
      .type(newUserName)

    cy.get('#customer_email')
      .type(data.email)

    cy.get('#customer_telephone')
      .type(data.telephone)

    cy.get('#shipping_address_city')
      .type(data.city)

    cy.get('#shipping_address_postcode')
      .type(data.department)

    cy.get('#free_checkout')
      .click()

    cy.contains('Оформить заказ')
      .click()

    cy.contains('Ваш заказ сформирован')
  })

  it('non cash payment', function () {
    cy.visit('http://bosch.perets-ace.com/')

    cy.contains('Купить')
      .click()

    cy.get('#basket')
      .find('button')
      .click()

    cy.get('.cart')
      .click()

    cy.contains('ОФОРМИТЬ ЗАКАЗ')
      .click()

    cy.get('#customer_lastname')
      .type(newUserName)

    cy.get('#customer_firstname')
      .type(newUserName)

    cy.get('#customer_email')
      .type(data.email)

    cy.get('#customer_telephone')
      .type(data.telephone)

    cy.contains('Самовывоз')
      .click()

    cy.get('select')
      .select('Магазин 2')

    cy.contains('Оформить заказ')
      .click()

    cy.contains('Ваш заказ сформирован')
  })

  it('Cash payment', function () {
    cy.visit('http://bosch.perets-ace.com/')

    cy.contains('Купить')
      .click()

    cy.get('#basket')
      .find('button')
      .click()

    cy.get('.cart')
      .click()

    cy.contains('ОФОРМИТЬ ЗАКАЗ')
      .click()

    cy.get('#customer_lastname')
      .type(newUserName)

    cy.get('#customer_firstname')
      .type(newUserName)

    cy.get('#customer_email')
      .type(data.email)

    cy.get('#customer_telephone')
      .type(data.telephone)

    cy.contains('Самовывоз')
      .click()

    cy.get('#cod')
      .click()

    cy.contains('Оформить заказ')
      .click()

    cy.contains('Ваш заказ сформирован')
  })

})