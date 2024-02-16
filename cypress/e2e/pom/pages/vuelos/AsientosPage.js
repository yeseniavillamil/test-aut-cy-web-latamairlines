
class AsientosPage{

    //User Interfaces
    elements = {
        BTN_SELECCIONAR_ASIENTO: (ubicacion)=> cy.get(`button[data-seat-number="${ubicacion}"]`),
        BTN_ELEGIR_ESTE_ASIENTO: ()=> cy.contains('button','Elegir este asiento'),
        BTN_AGREGAR_CONTINUAR: ()=> cy.get('button[data-testid="btn-confirm-and-continue-button"]'),
    }

    //task
    confirmarAsientos(ubicaciones)
    {
        this.elegirAsientos(ubicaciones);
        this.clickBtnAgregarContinuar();
    }

    //task
    elegirAsientos(ubicaciones)
    {
        for (const ubicacion of ubicaciones) { 
            this.clickBtnSeleccionarAsiento(ubicacion);
            this.clickBtnElegirEsteAsiento();
        }
    }

    //action
    clickBtnSeleccionarAsiento(ubicacion){
        this.elements.BTN_SELECCIONAR_ASIENTO(ubicacion).click();
    }

    //action
    clickBtnElegirEsteAsiento(){
        this.elements.BTN_ELEGIR_ESTE_ASIENTO().click();
    }

    //action
    clickBtnAgregarContinuar(){
        this.elements.BTN_AGREGAR_CONTINUAR().click();
        cy.wait(10000)
    }

}

module.exports = new AsientosPage();