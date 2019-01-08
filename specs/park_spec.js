const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Jurassic Park', 50, ['t-rex', 'brontosaurus'] )
  });

  it('should have a name', function(){
  const actual = park.name;
  assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, ['t-rex', 'brontosaurus']);
  });


  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur('stegosaurus')
    const actual = park.dinosaurCollection.length
    assert.strictEqual(actual, 3)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur()
    const actual = park.dinosaurCollection.length
    assert.strictEqual(actual,1)
  });

  it('should be able to remove a dinosaur from its collection by name', function(){
    park.removeDinosaurByName('t-rex')
    const actual = park.dinosaurCollection[0]
    assert.strictEqual(actual,'brontosaurus')
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
