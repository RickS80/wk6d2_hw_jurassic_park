const Park = function(name, ticketPrice, dinosaurCollection){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = dinosaurCollection;
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurCollection.push(dinosaur);
};

Park.prototype.removeDinosaur = function () {
  this.dinosaurCollection.pop()
};

Park.prototype.removeDinosaurByName = function (dinosaur) {
  const indexOfDinosaur = this.dinosaurCollection.indexOf(dinosaur);
  this.dinosaurCollection.splice(indexOfDinosaur, 1);
};

Park.prototype.findBySpecies = function (species) {
    returnedDinosaurs = []
    for (dinosaur of this.dinosaurCollection) {
      if (dinosaur.species === species) {
      returnedDinosaurs.push(dinosaur)
    }
  }
  return returnedDinosaurs
};



module.exports = Park;
