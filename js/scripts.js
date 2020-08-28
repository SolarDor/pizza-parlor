//Business Logic
//Constructor function for Customer
function Customer(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

Customer.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

//Constructor function for a Pizza
function Pizza(size, crust, selectedToppings) {
  this.psize = size;
  this.pcrust = crust;
  this.toppings = selectedToppings;
}

//Function to disable and enable gaming areas according to which player is active.

//Function on what is to happen when the dice is rolled.


//User Interface Logic Start
$(document).ready(function() {
//function for name submission
  $("#nameInputForm").submit(function(event) {
    const firstNameInput = $("input#firstName").val();
    const lastNameInput = $("input#lastName").val();
    $("#createYourPizza").show();
    $("#pizzaButton").hide();

  });

});






//Function to reset the form input fields, re-enable the buttons, reset the scores to 0.

