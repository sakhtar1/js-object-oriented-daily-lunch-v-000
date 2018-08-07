// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 0;
let deliveryId = 0;
let customerId = 0;
let mealId = 0;


class Neighborhood{
  constructor(name){
    this.name = name;
    this.id = neighborhoodId++;
    store.neighborhoods.push(this);
  }

  deliveries(){

  }

  customers(){
    return store.customers.filter(customer => {
        return customer.customerId = this.id;
      });
  }

  meals(){

  }

}
