const Port = require("../src/Port.js");

class Ship {
  constructor(currentPort) {
    this.currentPort = currentPort;
  }

  setSail() {
    if ((this.currentPort = "")) {
      return false;
    }
  }

  dock(port) {
    this.currentPort = port;
  }
}

const ship = new Ship("Dover");

// console.log(ship.setSail("kyrenia"));
module.exports = Ship;
