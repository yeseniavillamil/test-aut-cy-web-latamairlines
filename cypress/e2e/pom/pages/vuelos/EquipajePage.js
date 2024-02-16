
class EquipajePage{
    
    //User Interfaces
    elements = {
        BTN_AGREGA_EQUIPAJE: (peso)=> cy.get(`button[data-testid="add-${peso}-baggage"]`),
        BTN_VER_EQUIPAJE_ESPECIAL: ()=> cy.get('#accordion-special-baggages'),
        BTN_SIGUIENTE_PASAJERO: ()=> cy.get('button[aria-label="Siguiente pasajero"]'),
        BTN_CONTINUAR: ()=> cy.get('#BAGS-continue-button'),
    }

    //task
    confirmarEquipaje(equipajes)
    {
        this.ingresarEquipaje(equipajes);
        this.clickBtnContinuar();
    }

    //task
    ingresarEquipaje(equipajes)
    {
        let pasajero;
        //for (const pasajero of equipajes) {
        for (let i = 0; i < equipajes.length; i++) {
            pasajero = equipajes[i];
            for (const equipaje of pasajero.pasajero) {
                if(equipaje.peso === "45"){
                    this.clickBtnVerEquipajeEspecial();
                }
                this.clickBtnAgregarEquipaje(equipaje.peso);
            }
            if(i!==(equipajes.length-1)){
                this.clickBtnSiguientePasajero();
            }
        }
    }

    //action
    clickBtnAgregarEquipaje(peso){
        this.elements.BTN_AGREGA_EQUIPAJE(peso).click();
    }

    //action
    clickBtnVerEquipajeEspecial(){
        this.elements.BTN_VER_EQUIPAJE_ESPECIAL().click();
    }

    //action
    clickBtnSiguientePasajero(){
        this.elements.BTN_SIGUIENTE_PASAJERO().click();
    }

    //action
    clickBtnContinuar(){
        this.elements.BTN_CONTINUAR().click();
    }

}

module.exports = new EquipajePage();