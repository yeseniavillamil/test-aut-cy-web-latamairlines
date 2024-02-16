class FechasPage{

    //User Interfaces
    elements = {
        BTN_INGRESAR_FECHAS: ()=> cy.get('#InputFalseStyled'),
        BTN_SELECCIONA_FECHA_IDA: (dia,mes)=> cy.contains('.CalendarMonth',mes).contains('.CalendarMonth_table td',dia),
        BTN_SELECCIONA_FECHA_REGRESO: (dia,mes)=> cy.contains('.CalendarMonth',mes).contains('.CalendarMonth_table td',dia),
        BTN_CONFIRMAR: ()=> cy.get('#btnContinueCalendarCTA'),
    }

    //task
    confirmarAgenda(ida,regreso)
    {
        this.agendar(ida, regreso);
        this.clickBtnConfirmar();
    }

    //task
    agendar(ida,regreso)
    {
        this.clickBtnIngresarFechas();
        this.confirmarIda(ida);
        this.confirmarRegreso(regreso);
    }

    //task
    confirmarIda(ida){
        this.clickBtnSeleccionaFechaIda(ida.dia, ida.mes);
    }

    //task
    confirmarRegreso(regreso){
        this.clickBtnSeleccionaFechaRegreso(regreso.dia, regreso.mes);
    }

    //action
    clickBtnIngresarFechas(){
        this.elements.BTN_INGRESAR_FECHAS().click();
    }

    //action
    clickBtnSeleccionaFechaIda(dia, mes){
        this.elements.BTN_SELECCIONA_FECHA_IDA(dia, mes).click({force:true});
    }

    //action
    clickBtnSeleccionaFechaRegreso(dia, mes){
        this.elements.BTN_SELECCIONA_FECHA_REGRESO(dia, mes).click({force:true});
    }

    //action
    clickBtnConfirmar(){
        this.elements.BTN_CONFIRMAR().click();
    }

    

}

module.exports = new FechasPage();