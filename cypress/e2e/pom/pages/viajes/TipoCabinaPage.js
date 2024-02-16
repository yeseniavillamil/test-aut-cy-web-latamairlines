class TipoCabinaPage{

    //User Interfaces
    elements = {
        BTN_TIPO_CABINA: ()=> cy.get('#btnCabinTypeCTA'),
        RBT_SELECCION_TIPO: (tipo)=> cy.contains('#listCabinType li',tipo),
        BTN_CONFIRMAR: ()=> cy.get('#btnCabinTypeConfirmCTA'),
        
    }

    //task
    confirmarEleccion(tipo){
        this.elegirTipo(tipo);
        this.clickBtnConfirmar();
    }

    //task
    elegirTipo(tipo){
        this.clickBtnTipoCabina();
        this.clickRbtSeleccionTipo(tipo);    
    }

    //action
    clickBtnTipoCabina(){
        this.elements.BTN_TIPO_CABINA().click();
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

module.exports = new TipoCabinaPage();