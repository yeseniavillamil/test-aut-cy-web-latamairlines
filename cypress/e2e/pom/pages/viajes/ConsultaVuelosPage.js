const AeroPuertosPage = require("./AeroPuertosPage");
const FechasPage = require("./FechasPage");
const PasajerosPage = require("./PasajerosPage");
const TipoCabinaPage = require("./TipoCabinaPage");
const TipoViajePage = require("./TipoViajePage");

class ConsultaVuelosPage{

    //User Interfaces
    elements = {
        BTN_BUSCAR: ()=> cy.get('#btnSearchCTA'),
    }

    //task
    buscar(tipoViaje, tipoCabina, viaje, agenda, pasajeros)
    {
        this.ajustarTipoViaje(tipoViaje);
        this.ajustarTipoCabina(tipoCabina);
        this.ajustarViaje(viaje);
        this.ajustarAgenda(agenda);
        this.ajustarPasajeros(pasajeros);

        this.clickBtnBuscar();
    }

    ajustarTipoViaje(tipoViaje){
        if(tipoViaje){
            TipoViajePage.confirmarEleccion(tipoViaje);
        }
    }

    ajustarTipoCabina(tipoCabina){
        if(tipoCabina){
            TipoCabinaPage.confirmarEleccion(tipoCabina);
        }
    }

    ajustarViaje(viaje){
        if(viaje){
            AeroPuertosPage.viajar(
                viaje.origen,
                viaje.destino
              );
        }
    }

    ajustarAgenda(agenda){
        if(agenda){
            FechasPage.confirmarAgenda(
                agenda.ida,
                agenda.regreso
              );
        }
    }

    ajustarPasajeros(pasajeros){
        if(pasajeros){
            PasajerosPage.confirmarAdicion(
                pasajeros
              );
        }
    }

    //action
    clickBtnBuscar(){
        this.elements.BTN_BUSCAR().click();
    }

}

module.exports = new ConsultaVuelosPage();