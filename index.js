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
    return store.deliveries.filter(delivery => {
        return delivery.deliveryId = this.id;
      });
  }

  customers(){
    return store.customers.filter(customer => {
        return customer.customerId = this.id;
      });
  }

  meals(){

  }

}

class Customer{
  constructor(name){
    this.id = customerId++;
    this.name = name;
    this.neighborhoodId = neighborhood.id;
    store.customers.push(this);
  }

  deliveries(){
    return store.deliveries.filter(delivery => {
      return delivery.deliveryId = this.id;
    });
  }

  meals(){
    return store.meals.filter(meal => {
      return meal.mealId = this.id;
    });
  }

  totalSpent(){

  }
}

class Meal{
  constructor(title, price){
    this.title = title;
    this.price = price;
    this.id = mealId++
    store.meals.push(this);
  }

  deliveries(){
    return store.deliveries.filter(delivery => {
      return delivery.deliveryId = this.id;
    });
  }

  customers(){

  }

  byPrice(){

  }
}

class Delivery{
  constructor(meal, neighborhood, customer){
    this.id = deliveryId++;
    this.mealId = meal.id;
    this.neighborhoodId = neighborhood.id;
    this.customerId = customer.id;
    store.deliveries.push(this);
  }

  meal(){

  }

  customer(){

  }

  neighborhood(){

  }
}
