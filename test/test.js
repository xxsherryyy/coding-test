var expect = require("chai").expect;
var employee = require("../src/app.js");

describe("employee", function () {
  it("Capitalizes inital letter of each word", function () {
    expect(employee("sherry yang")).to.equal("Sherry Yang");
  });
  it("Returns a string", function () {
    expect(employee("sherry yang")).to.be.a('string');
  });

});

var multiply = function (x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x or y is not a number.");
  }
  else return x * y;
};

describe("Multiply", function () {
  it("multiplies numbers when passed numbers", function () {
    expect(multiply(2, 4)).to.equal(8);
  });

  it("should throw error when not passed numbers", function () {
    expect(function () {
      multiply(2, "4");
    }).to.throw(Error);
  });
});


