# Find Your Hat
A simple interactive terminal game.

**Author: Jim Caldarise**
**Date: 1/3/2022**

**Node modules & json packages provided by Codecademy starter download** 
**main.js is all original code**


## Overview
This is s simple terminal game in which a user gives commands using the keyboard
to "find their hat." The hat is designated by a ^ character. 

The game first generates a random field. There are neutral squares (░) as well 
as holes (0). The code can be adjusted to alter the dimensions of the field as 
well as the percentage of holes present. There is no guarantee that the puzzle 
is solvable. 

## Gameplay
A user enters u, d, l, or r to move (up, down, left, right). If invalid input
is entered, an error message is displayed. If a move pushes the player off the 
field or into a hole, the game is over. If the user finds their hat, they win.

Once a square has been traversed, the path is marked with a *. There is no
penalty for backtracking.

## Future Improvements
   +Guarantee a solvable board using a recursive backtracking algorithm.
   +Improve graphics by integrating this into a web app.
   +Hide the holes and have a "3 strikes" gameplay
   +Implement a timer which gets shorter and shorter with each new game.
   +Implement progressive difficulty, adding extra holes with each new game