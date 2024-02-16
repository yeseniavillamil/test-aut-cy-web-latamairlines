class AeroPuertosPage{

    //User Interfaces
    elements = {
        BTN_ORIGEN: ()=> cy.get('#lblInputOrigin'),
        TXT_ORIGEN: ()=> cy.get('#txtInputOrigin'),
        BTN_DESTINO: ()=> cy.get('#lblInputDestination'),
        TXT_DESTINO: ()=> cy.get('#txtInputDestination'),
        ITM_LST_LUGAR: (selecciona)=> cy.contains('button[id^="btnItemAutoComplete_"]',selecciona),
        BTN_CONTINUAR: ()=> cy.get('#btnContinueCTA'),
    }

    //task
    viajar(origen,destino){
        this.confirmarOrigen(origen.lugar, origen.aeropuerto);
        this.confirmarDestino(destino.lugar, destino.aeropuerto);
    }

    //task
    confirmarOrigen(lugar, selecciona){
        this.buscarOrigen(lugar, selecciona)
        this.clickBtnContinuar();
    }

    //task
    buscarOrigen(lugar, selecciona){
        this.clickBtnOrigen();
        this.ingresaTxtOrigen(lugar);
        this.clickItmLstLugar(selecciona);
        
    }

    //task
    confirmarDestino(lugar, selecciona){
        this.buscarDestino(lugar, selecciona)
        this.clickBtnContinuar();
    }

    //task
    buscarDestino(lugar, selecciona){
        this.clickBtnDestino();
        this.ingresaTxtDestino(lugar);
        this.clickItmLstLugar(selecciona);
    }

    //action
    clickItmLstLugar(selecciona){
        if(selecciona){
            this.elements.ITM_LST_LUGAR(selecciona).click();
        }
    }

    //action
    clickBtnOrigen(){
        this.elements.BTN_ORIGEN().click();
    }

    //action
    ingresaTxtOrigen(lugar){
        if(lugar){
            this.elements.TXT_ORIGEN().type(lugar);
        }
    }

    //action
    clickBtnDestino(){
        this.elements.BTN_DESTINO().click();
    }

    //action
    ingresaTxtDestino(lugar){
        if(lugar){
            this.elements.TXT_DESTINO().type(lugar);
        }
    }

    //action
    clickBtnContinuar(){
        this.elements.BTN_CONTINUAR().click();
    }


}

module.exports = new AeroPuertosPage();