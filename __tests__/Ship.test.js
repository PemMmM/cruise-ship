const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");

describe("Ship", () => {
  it("can be instantiated", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it("has a starting port", () => {
    const port = new Port("Dover");
    const ship = new Ship(port);
    expect(ship.currentPort).toBe(port);

  });

  it("ship should set sail from the port", () => {
    const port = new Port("Dover");
    const ship = new Ship(port);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });

  /* xit("ship should set sail from the port", () => {
    const ship = new Ship("");
    ship.setSail();
    expect(ship.currentPort).toBeTruthy();
  }); */

  it("can dock at a different port", () => {
      const dover = new Port('Dover');
      const ship = new Ship('dover');

      const calais = new Port('Calais');
      ship.dock(calais);
      expect(ship.currentPort).toBe(calais);
  });

});
