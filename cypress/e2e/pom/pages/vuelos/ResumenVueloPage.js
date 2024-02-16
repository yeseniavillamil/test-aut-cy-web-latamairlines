
class ResumenVueloPage{

    //User Interfaces
    elements = {
        BTN_IR_A_ASIENTOS: ()=> cy.get('#button9'),
    } 

    //task
    verAsientos()
    {
        this.clickBtnIrAAsientos();
        cy.wait(10000)
    }

    //action
    clickBtnIrAAsientos(){
        this.elements.BTN_IR_A_ASIENTOS().click();
    }

}

module.exports = new ResumenVueloPage();