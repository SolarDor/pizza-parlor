# Pizza Parlor

### _Webpage that uses objects, constructors, and prototypes to populate a price on a pizza, 28 August 2020_

#### By _**Cameron Will <cellardoorsolar@aol.com>**_

# Description

_This is a webpage project to practice using objects, constructors, and prototypes to emulate the pizza cost calculator._

## Specs for Program Behaviors
1.[] **Take input from customer for name and append to order total after fields are selected and submit button is pressed.**
### Input: *Cameron*
### Output: *Display: "Thank you, Cameron, your total today is "$ "*

2.[] **Customer selects one of four possible pizza sizes. This initializes the base pizza price and begins a running order price.**
### Input: *Select* "Medium"
### Output: Initialize base price of $14.

3.[] **Customer selects one of three pizza crust styles, order price is increased according to style.**
### Input: *Select* "Chicago-Style"** 
### Output: Order price increased by $2.00.

4.[] **Customer selects additional toppings, price is increased for each additional topping**
### Input: *Select* Pepperoni +$2, *Select* Mushrooms +$1.5, *Select* Black Olives +$1.5.
### Output: Order Price

4.[] **After every dice roll, check value of player1 turn total. If value is 0, make no adjustments to player 1 score, clear the player 1 turn total section, hide the player 1 button group and show the player 2 button group**
### Input: *Click roll button* *roll = 5* *Click roll button* *roll = 1*
### Output: player1.overallScore = 0

5.[x] **When hold button is clicked, add the value of player1's turn total to player 1 score, transform value of player1 turn total to 0, clear the player 1 turn total section, hide the player 1 button group and show the player 2 button group. Player 1's overall score section is updated to display the current value of player1.overallScore**
### Input: *Click roll button* *roll = 5* *Click hold button*
### Output: player1.overallScore = 5, *end turn function* *show player2 button group*

6.[X] **Expand specs 1-5 for player 2, when clicking player 2 roll and hold button. Mirroring the same 1-5 specs for player 1, adjust player 2 score accordingly, clear the player 2 turn total section, hide the player 2 button group and show the player 1 button group in a similar manner**
### Input: *Click roll button* *roll = 5* *Click hold button*
### Output: player2.overallScore = 5, *end turn function* *show player1 button group*

7.[X] **When either player's overall score reaches >= 100, an alert will declare a winner and New Game button will display.**
### Input: player1.overallScore = 99, *Click roll button* *roll = 5* *Click hold button*
### Output: player1.overallScore = 104, *alert: "Congrats, Emme won!"* display reset button *Play again!*

8.[X] **When Pig Nose button is clicked, the player1 and player2 variables are deleted (removing the current player data), the pig nose button is hidden, and the name entry/player creation forms are displayed again.**
### Input: *Click Pig Nose Button*
### Output: *page effectively returns to original state*


## Setup/Installation Requirements

* _open terminal_
* _type "cd desktop", then press enter_
* _type "git clone https://github.com/solardor/pizza-parlor", then press enter_
* _locate and open folder on desktop named "pizza-parlor"_
* _open the file named "index.html"_

## Known Bugs

_No known bugs at this time_

## Technologies Used

* HTML5
* CSS/Bootstrap
* JavaScript/jQuery

### License

Copyright (c) 2020 **_Cameron Will_**
