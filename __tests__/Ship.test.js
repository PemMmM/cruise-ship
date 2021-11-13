const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");
const Itinerary = require("../src/Itinerary.js");

describe("Ship", () => {
  let dover;
  let calais;
  let itinerary;
  let ship;

  describe("before each", () => {
    let dover;
    let calais;

    beforeEach(() => {
      dover = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: "Dover",
        ships: [],
      };

      calais = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: "Calais",
        ships: [],
      };

      itinerary = {
        ports: [dover, calais],
      };
      ship = new Ship(itinerary);
    });

    it.only("can be instantiated", () => {
      expect(ship).toBeInstanceOf(Object);
    });

    it.only("has a starting port", () => {
      //const port = new Port("Dover");

      //const itinerary = new Itinerary([port]);
      //const ship = new Ship(itinerary);

      expect(ship).toBeInstanceOf(Object);
      expect(ship.currentPort).toBe(dover);
      //expect(itinerary.ports).toEqual([port]);
    });

    it.only("ship can set sail from the port", () => {
      ship.setSail();

      expect(ship.currentPort).toBeFalsy();
      expect(dover.removeShip).toHaveBeenCalledWith(ship);

      //expect(dover.ships).not.toContain(ship);
    });

    it.only("can dock at a different port", () => {
      ship.setSail();
      ship.dock();

      expect(calais.addShip).toHaveBeenCalledWith(ship); //gercekden napdgimi anlamadim
      //expect(ship.currentPort).toBe(calais);
    });

    it.only("can't sail further than its itinerary", () => {
      ship.setSail();
      ship.dock();

      expect(() => ship.setSail()).toThrowError("End of itinerary reached");
    });

    it.only("gets added to port on instantiation", () => {
      expect(dover.addShip).toHaveBeenCalledWith(ship);
      //expect(dover.ships).toContain(ship);
    });
  });
});
