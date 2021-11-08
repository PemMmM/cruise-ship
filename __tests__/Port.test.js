const Port = require("../src/Port.js");

describe("Port", () => {
  it("can be instantiated", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it("instance port has name property", () => {
    const port = new Port("Dover");
    expect(port.hasOwnProperty("name")).toBe(true);
  });
});
