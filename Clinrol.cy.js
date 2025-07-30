describe('Clinrol ', () => {
    beforeEach(()=> {
        cy.viewport(1440, 900);
        cy.visit('https://dev.clinrol.com/auth/sign-in');
        cy.get('input[placeholder="Email"]').type('site@probits.com.au');
        cy.get('input[placeholder="Password"]').type('site@Pr0bits1');
        cy.get('button[type="submit"]').click();

    });
    it ('Appointments', () => {
        //Overview
        cy.xpath('/html/body/main/div/nav/div/div[2]/a').click({force:true});
        //Appintment
        cy.get('.mb-8 > :nth-child(5) > .flex').click();
        //New Appointment
        cy.xpath('/html/body/main/div/div[2]/main/div/div[1]/div[2]/button').click();
        cy.get('input[placeholder="Enter appointment title"]').type('Testing');
        cy.get('button[role="combobox"]').first().click();
        cy.contains('Phone Call').click({ force: true });







    })

  
});