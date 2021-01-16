describe('makeModelScraper',  () => {
    const makes = []
    const makesAndModels = []
    before( () => {
        cy.visit(Cypress.env('url'))
    })

    it('makes', () => {
        cy.get('.makes .dropdown-toggle').click()

        cy.get('.option-list.makes li').each(($el, index) => {
            makes.push($el.find('label span')[0].innerText)

        }).then(() => {
            cy.get('.makes .dropdown-toggle').click()
        });
    })

    it ('models', () => {
        makes.forEach(make => {
            if (['w', 'x', 'y', 'z'].includes(make.toLowerCase()[0])) {
                let models = []
                cy.get('.makes .dropdown-toggle').click()

                cy.get(`.option-list.makes li label input[value="${make}"]`).click()
                cy.get('.makes .dropdown-toggle').click()

                cy.get('.models .dropdown-toggle').click()

                cy.get('.models .option-list.zip-radius li').each(($el, index) => {
                    if (index !== 0) {
                        models.push($el.find('label span')[0].innerText)
                    }

                }).then(() => {
                    cy.get('.models .dropdown-toggle').click()
                    cy.get('.makes .dropdown-toggle').click()

                    cy.get(`.option-list.makes li label input[value="${make}"]`).click()
                    cy.get('.makes .dropdown-toggle').click()
                    makesAndModels.push({make, models})
                    console.log(makesAndModels)
                });
            }
            
        })
        // cy.writeFile('wxyz.json', makesAndModels);
    })
})
