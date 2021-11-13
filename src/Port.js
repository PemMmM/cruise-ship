const Ship = require("../src/Ship.js");

class Port {
  constructor(name) {
    this.name = name;
    this.ships = [];
  }
  addShip(ship) {
    return this.ships.push(ship);
  }

  removeShip(ship) {
    //return this.ships.pop(ship);
    const index = this.ships.indexOf(ship);
if (index > -1) {
  this.ships.splice(index, 1);
}
  }
}

module.exports = Port;
