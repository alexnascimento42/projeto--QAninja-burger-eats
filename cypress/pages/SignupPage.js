class SignupPage{

    go() { //essa função ira acessar a pagina onde tem o formulario de cadastro para que o usuario se torne um entegador
        cy.visit('/')

        cy.get('a[href="/deliver').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')   
     
    }

    fillForm(deliver){ // função irá preecher todo o cadastro de formulario de entregador 
        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)


        cy.contains('.delivery-method li', deliver.delivery_method).click()
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)

    }

    submit(){ // essa função submete ao formulario
        cy.get('form button[type="submit"]').click()
    }

    modalContentShouldBe(expectedMessage){ // função irá encapsular a validação
        cy.get('.swal2-container .swal2-html-container')
        .should('have.text', expectedMessage).should('be.visible')
    }

    alertMessageShouldBe(expectedMessage){
        //cy.get('.alert-error').should('have.text', expectedMessage)
        cy.contains('.alert-error',expectedMessage)
    }

}

export default new SignupPage;
