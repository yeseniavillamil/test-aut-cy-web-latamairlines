
class VuelosRecomendadosPage{

    //User Interfaces
    elements = {
        BTN_SELECCIONAR_RESULTADO: (numero)=> cy.get(`#WrapperCardFlight${numero} div[role="button"]`),
        BTN_ELEGIR_VUELO: ()=> cy.get('#bundle-detail-0-flight-select'),
    } 

    //task
    elegirRecomendado(numero)
    {
        this.clickBtnSeleccionarResultado(numero);
        this.clickBtnElegirVuelo();
    }

    //action
    clickBtnSeleccionarResultado(numero){
        if(numero){
            numero = numero-1
        }else{
            numero = 1
        }
        this.elements.BTN_SELECCIONAR_RESULTADO(numero).click();
    }

    //action
    clickBtnElegirVuelo(){
        this.elements.BTN_ELEGIR_VUELO().click();
    }

}

module.exports = new VuelosRecomendadosPage();