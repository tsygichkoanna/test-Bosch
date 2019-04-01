describe('Searctest', function () {

    it('Search field', function () {
      cy.visit('http://bosch.perets-ace.com/')

      cy.get('[name = "search"]')
        .type('Дрель')
        .wait(2500)
        .clear()
        .type('Сверления')
        .wait(2500)
        .clear()
        .type('WE')
        .wait(2500)
        .clear()
        .type('180')
        .wait(2500)
        .clear()
        .type('Drel')
        .wait(2500)
        .clear()
        .type('Дрель Bosch')
        .wait(2500)
        .clear()
    })
    
})
