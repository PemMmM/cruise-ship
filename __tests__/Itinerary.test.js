const Itinerary = require("../src/Itinerary.js");
const Port = require("../src/Port.js");

describe("Itinerary", () => {
  it("can be instantiated", () => {
    // const itinerary = new Itinerary();
    expect(new Itinerary()).toBeInstanceOf(Object);
  });

  it("instances has ports property", () => {
    const itinerary = new Itinerary();
    expect(itinerary.hasOwnProperty("ports")).toBe(true);
  });

  it("can have ports", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");

    const itinerary = new Itinerary([dover, calais]);

    expect(itinerary.ports).toEqual([dover, calais]);
  });
}); 

