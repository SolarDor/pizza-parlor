//Business Logic
//Constructor function for Customer
// function Customer(firstName, lastName){
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Customer.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// }

//Constructor function for a Pizza
function Pizza(size, crust, selectedToppings) {
  this.psize = size;
  this.pcrust = crust;
  this.toppings = selectedToppings;
}

// Topping Cost Calculator
PizzaMaker.prototype.toppingsCharge = function(j){
  var toppingsCharge = 0;
  for (var i = 0; i < pizzasOrdered[j].toppings.length; i++) {
      toppingsCharge += 0.5;
  }
  if(pizzasOrdered[j].pSize === 'Medium'){
      toppingsCharge *= 1.5;
  }else if (pizzasOrdered[j].pSize === 'Large') {
      toppingsCharge *= 2;
  }
  return toppingsCharge;
}
function addToppings(n){
  for (var i = 0; i < selectedToppings.length; i++) {
      // pizzasOrdered[n].toppings.push(selectedToppings[i]);
  }
}
function addPizza(pizza){
  pizzasOrdered.push(pizza);
}
// Total Cost Calculator
function totalCostCalculator(){
  var charges = 0;
  for (var i = 0; i < pizzasOrdered.length; i++) {
      if(pizzasOrdered[i].pSize === "Small"){charges += 10}
      else if(pizzasOrdered[i].pSize === "Medium"){charges += 15}
      else if(pizzasOrdered[i].pSize === "Large"){charges += 20}
      charges += pizzasOrdered[i].toppingsCharge(i);
  }
  return charges;
}
//Function to disable and enable gaming areas according to which player is active.

//Function on what is to happen when the dice is rolled.


//User Interface Logic Start
$(document).ready(function() {
//function for name submission
  var numOfToppingsAvailable = 28;
  

  });

});






//Function to reset the form input fields, re-enable the buttons, reset the scores to 0.

