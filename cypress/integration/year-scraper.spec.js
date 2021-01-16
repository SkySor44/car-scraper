describe('yearScraper', () => {
    const years = []
    before( () => {
        cy.visit(Cypress.env('url'))
    })

    it('years', () => {
        cy.get('#searchFormYearFrom option').each(($el, index) => {
            if (index !== 0) {
                years.push($el[0].value)
            }
        }).then(() => {
            // cy.writeFile('years.json', years);
        })
    })
})