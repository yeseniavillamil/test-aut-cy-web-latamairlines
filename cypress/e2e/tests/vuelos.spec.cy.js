const ConsultaVuelosPage = require("../pom/pages/viajes/ConsultaVuelosPage");
const AsientosPage = require("../pom/pages/vuelos/AsientosPage");
const EquipajePage = require("../pom/pages/vuelos/EquipajePage");
const ResumenVueloPage = require("../pom/pages/vuelos/ResumenVueloPage");
const VuelosRecomendadosPage = require("../pom/pages/vuelos/VuelosRecomendadosPage");

describe('Gestionar Vuelo', () => {

  beforeEach(() => {
    //cy.homepage();
  })

  it('Buscar vuelos', () => {

    cy.homepage();

    ConsultaVuelosPage.buscar(
      //Sólo ida en clase Premium
      'Solo ida', 
      'Premium Economy',
      //Buscar viaje de Medellín a Bogotá
      {
        origen: {  lugar: 'Medellín', aeropuerto: 'Jose Maria Cordova'},
        destino: {  lugar: 'Bogotá',  aeropuerto:'El Dorado'}
      },
      //Ingresar fechas de viaje
      {
        ida: {dia:"14", mes: "febrero 2024"},
        regreso: {dia:"17", mes: "marzo 2024"}
      },
      //Para dos personas (adulto por defecto, + 1 niño)
      [{tipo: "Niños"}]
    );

  })

  it('Tramitar vuelos', () => {

    cy.goTo('https://www.latamairlines.com/co/es/ofertas-vuelos?origin=MDE&inbound=null&outbound=2024-03-17T17%3A00%3A00.000Z&destination=BOG&adt=1&chd=1&inf=0&trip=OW&cabin=PremiumEconomy&redemption=false&sort=RECOMMENDED');

    cy.intercept({resourceType: /xhr|fetch/},{log:false})

    VuelosRecomendadosPage.elegirRecomendado(1);
    ResumenVueloPage.verAsientos();
    AsientosPage.confirmarAsientos(['1A','2A']);
    EquipajePage.confirmarEquipaje(
      [ {pasajero: [
          {peso: "23"},
          {peso: "15"},
          {peso: "45"} //especial
        ]},
        {pasajero:[
          {peso: "15"}
        ]}
      ]
    );
    
  })
})