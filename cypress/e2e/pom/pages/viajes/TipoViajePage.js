class TipoViajePage{

    //User Interfaces
    elements = {
        BTN_TIPO_VIAJE: ()=> cy.get('#btnTripTypeCTA'),
        RBT_SELECCION_TIPO: (tipo)=> cy.contains('#listRoundTrip li',tipo),
        BTN_CONFIRMAR: ()=> cy.get('#btnTripTypeConfirmCTA'),
        
    }

    //task
    confirmarEleccion(tipo){
        this.elegirTipo(tipo);
        this.clickBtnConfirmar();
    }

    //task
    elegirTipo(tipo){
        this.clickBtnTipoViaje();
        this.clickRbtSeleccionTipo(tipo);    
    }

    //action
    clickBtnTipoViaje(){
        this.elements.BTN_TIPO_VIAJE().click();
    }

    //action
    clickRbtSeleccionTipo(tipo){
        this.elements.RBT_SELECCION_TIPO(tipo).click();
    }

    //action
    clickBtnConfirmar(){
        this.elements.BTN_CONFIRMAR().click();
    }

}

module.exports = new TipoViajePage();