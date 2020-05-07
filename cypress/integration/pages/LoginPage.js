/// <reference types = "cypress"/>

class LoginPage {

    popupClose() {
        cy.get('.layui-layer-setwin').click();
    }

    signInButton() {
        cy.get('.headUser_linkLogin').trigger('mouseover');
        cy.get('.headUser_btnLogin').click();
    }

    fillSignInForm() {
        cy.fixture('users').then((data)  => {
            cy.get('#email').type(data.email);
            cy.get('#password').type(data.password);
        });
    }

    submitSignInButton() {
        cy.get('#js-btnSubmit').click();
    }
}

export default LoginPage;