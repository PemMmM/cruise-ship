const Itinerary = require("../src/Itinerary.js");
const Port = require("../src/Port.js");

class Ship {
  constructor(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
  }

  setSail() {
    const itinerary = this.itinerary;
    const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

    if (currentPortIndex === itinerary.ports.length - 1) {
      throw new Error("End of itinerary reached");
    }

    this.previousPort = this.currentPort;
    this.currentPort = null;
  }

  dock() {
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

    return (this.currentPort = itinerary.ports[previousPortIndex + 1]);
  }
}

/* const dover = new Port("Dover");
const calais = new Port("Calais");
const itinerary = new Itinerary([calais, dover]);
const ship = new Ship(itinerary);

// console.log(dover);
// console.log(calais);
// console.log(itinerary);
// console.log(ship);

console.log(ship.currentPort);
ship.setSail();
ship.dock();
console.log(ship.currentPort); */

module.exports = Ship;
