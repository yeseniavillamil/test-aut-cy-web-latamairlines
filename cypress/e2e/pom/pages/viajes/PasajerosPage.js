class PasajerosPage{

    //User Interfaces
    elements = {
        BTN_AGREGAR_PASAJEROS: ()=> cy.get('#btnAddPassengerCTA'),
        BTN_ADICIONAR_TIPO: (tipo)=> cy.contains('#wrapperAddPax ul li',tipo).find('button[id^="add"]'),
        BTN_APLICAR: ()=> cy.get('#sendCallback'),
        
    }

    //task
    confirmarAdicion(pasajeros)
    {
        this.adicionar(pasajeros);
        this.clickBtnAplicar();
    }

    //task
    adicionar(pasajeros)
    {
        this.clickBtnAgregarPasajeros();
        
        for (const pasajero of pasajeros) { 
            this.clickBtnAdicionarTipo(pasajero.tipo);
        }
    }

    //action
    clickBtnAgregarPasajeros(){
        this.elements.BTN_AGREGAR_PASAJEROS().click();
    }

    //action
    clickBtnAdicionarTipo(tipo){
        this.elements.BTN_ADICIONAR_TIPO(tipo).click();
    }

    //action
    clickBtnAplicar(){
        this.elements.BTN_APLICAR().click();
    }

}

module.exports = new PasajerosPage();