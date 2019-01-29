const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park ('chompyland', 40)
    dino1 = new Dinosaur ('big mouth', 'carnivore', 20)
    dino2 = new Dinosaur ('horny', 'herbivore', 10)
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'chompyland');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 40);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = [];
    assert.deepStrictEqual(actual, park.dinoCollection);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinoToCollection(dino1);
    const actual = [dino1];
    assert.deepStrictEqual(actual, park.dinoCollection);
  });

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
