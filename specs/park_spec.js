const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 400)
    dinosaur2 = new Dinosaur('brontosaurus', 'herbivore', 100)
    dinosaur3 = new Dinosaur('stegosaurus', 'carnivore', 200)
    dinosaur4 = new Dinosaur('t-rex', 'carnivore', 400)
    park = new Park('Jurassic Park', 50, [dinosaur1, dinosaur2])
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
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2]);
  });


  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur3);
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 3);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur();
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual,1)
  });

  it('should be able to remove a dinosaur from its collection by name', function(){
    park.removeDinosaurByName(dinosaur1);
    const actual = park.dinosaurCollection[0];
    assert.strictEqual(actual, dinosaur2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur3);

    })


  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.findBySpecies('t-rex')
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur4])
  })


  // it('should be able to remove all dinosaurs of a particular species', function(){
  //   park.addDinosaur(dinosaur3);
  //   park.addDinosaur(dinosaur4);
  //   park.removeBySpecies('brontosaurus')
  //   const actual = park.dinosaurCollection
  //   assert.strictEqual(actual, [dinosaur1, dinosaur3, dinosaur4])
  // })

  it('should be able to calculate total number of visitors per day', function(){
    const actual = park.visitorsPerDay()
    assert.strictEqual(actual, 500)
  })

  it('should be able to calculate total number of visitors per year', function(){
    const actual = park.visitorsPerYear()
    assert.strictEqual(actual, 182500)
  })

  it('should be able to calculate total revenue per year', function(){
    const actual = park.revenuePerYear()
    assert.strictEqual(actual, 9125000)
  })

})
