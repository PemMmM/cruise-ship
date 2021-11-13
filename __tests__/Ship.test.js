const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");
const Itinerary = require("../src/Itinerary.js");

describe("Ship", () => {
  it.only("can be instantiated", () => {
    const port = new Port("Dover");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship).toBeInstanceOf(Object);
  
  });

  it.only("has a starting port", () => {
    const port = new Port("Dover");

    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    

    expect(itinerary.ports).toEqual([port]);
  });

  it.only("ship can set sail from the port", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(dover.ships).not.toContain(ship);
  });

  it.only('can dock at a different port', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais])
    const ship = new Ship(itinerary);
  
    ship.setSail();
    ship.dock();
  
    expect(ship.currentPort).toBe(calais);
  })

  it.only('can\'t sail further than its itinerary', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
  
    ship.setSail();
    ship.dock();
  
    expect(() => ship.setSail()).toThrowError('End of itinerary reached');
  });

  it.only('gets added to port on instantiation', () => {
    const dover = new Port('Dover');
    //const calais = new Port('Calais');
    const itinerary = new Itinerary([dover]);
    const ship = new Ship(itinerary);

  
    expect(dover.ships).toContain(ship);
  });

});
