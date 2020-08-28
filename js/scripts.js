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
Pizza.prototype.toppingsCharge = function(j){
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
      if(pizzasOrdered[i].pSize === "Small"){charges += 12}
      else if(pizzasOrdered[i].pSize === "Medium"){charges += 14}
      else if(pizzasOrdered[i].pSize === "Large"){charges += 16}
      charges += pizzasOrdered[i].toppingsCharge(i);
  }
  return charges;
}


//User Interface Logic Start
$(document).ready(function() {
// Calculate Total
$('.btn-success').click(function(event){
  event.preventDefault();
  var total = totalCostCalculator();
  $('#create-order').hide();
  $('#checkout').show();
  for (var i = 0; i < pizzasOrdered.length; i++) {
      if(i > 0){$('#order-detail').append('<h6>and</h6>');}
      $('#order-detail').append('<h4><strong>A ' + pizzasOrdered[i].pSize + ' ' + pizzasOrdered[i].pStyle + ' ' + pizzasOrdered[i].pizzaType + ':</strong></h4>');
      if(pizzasOrdered[i].toppings.length > 0){
          $('#order-detail').append('<p><em>topped with</em> <br> <small>' + pizzasOrdered[i].toppings + '</small></p>')
      };
  };
  $('#order-total').append('<h4>Your total comes to $' + total + '</h4>');
});
});


//Function to reset the form input fields, re-enable the buttons, reset the scores to 0.
