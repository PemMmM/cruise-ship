const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");
const Itinerary = require("../src/Itinerary.js");


describe("Port", () => {
  it("can be instantiated", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it("instance port has name property", () => {
    const port = new Port("Dover");
    expect(port.hasOwnProperty("name")).toBe(true);
  });

  it('can add a ship', () => {
    const port = new Port('Dover');
    const ship = {};

    port.addShip(ship);

    expect(port.ships).toContain(ship);
})

it('can remove a ship', () => {
  const port = new Port('Dover');
  const titanic = {};
  const queenMary = {};

  port.addShip(titanic);
  port.addShip(queenMary);
  port.removeShip(queenMary);

  expect(port.ships).toEqual([titanic]);
})
});
