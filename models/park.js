const Park = function (name, ticketPrice) {
this.name = name;
this.ticketPrice = ticketPrice;
this.dinoCollection = [];
};

Park.prototype.addDinoToCollection = function (dino) {
  this.dinoCollection.push(dino);
};

Park.prototype.removeDinoFromCollection = function (dino) {
  const index = this.dinoCollection.indexOf(dino);
  if (index !== -1) {
    this.dinoCollection.splice(index, 1);
  }
};

// Park.prototype.mostVisitors = function () {
//   var most = 0;
//   var counter = 0;
//   for (var each in this.dinoCollection) {
//     var value = this.dinoCollection[key];
//     if (value > most) {
//       most = value;
//     }
//   } return this.dinoCollection[counter];
// };

Park.prototype.allOneSpecies = function () {
  var allOne = [];
  for (each in this.dinoCollection) {
    if (each.species === "horny"){
      allOne.push(each);
    }
  } return allOne;
};

Park.prototype.removeDinoSpeciesFromCollection = function (dino) {
  const index = this.dinoCollection.indexOf(dino);
  if (index !== -1 && this.dinoCollection[index].species === "big mouth") {
    this.dinoCollection.splice(index, 1);
  }
};

module.exports = Park;
