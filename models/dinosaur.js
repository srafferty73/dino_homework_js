const Dinosaur = function (species, diet, guestsAttractedPerDay) {
this.species = species;
this.diet = diet;
this.guestsAttractedPerDay = guestsAttractedPerDay;
};

// Dinosaur.prototype.guestsAttractedPerDay = function() {
//   return this.visitors;
// }

module.exports = Dinosaur;
