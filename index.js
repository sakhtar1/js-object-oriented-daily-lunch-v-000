// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };


class Neighborhood{
  constructor(name){
    this.name = name;
    this.id = neighborhoodId++;
  }
}