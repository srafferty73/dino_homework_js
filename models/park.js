const Park = function (name, ticketPrice) {
this.name = name;
this.ticketPrice = ticketPrice;
this.dinoCollection = [];
};

Park.prototype.addDinoToCollection = function (dino) {
  this.dinoCollection.push(dino);
};

module.exports = Park;
