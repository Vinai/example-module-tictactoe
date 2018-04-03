# UiComponents TicTacToe

This is a small example module showing different ways to manage shared frontend view state with Magento 2 UiComponents.

To make it possible to compare to other frameworks it implements the well known TicTacToe game of the React intro tutorial found at https://reactjs.org/tutorial/tutorial.html
 
There are three branches showing different approaches to shared state management:

* [`0-in-component-state`](https://github.com/Vinai/example-module-tictactoe/tree/0-in-component-state)  
  State is managed as part of each knockout view model with imports and linking.
   
* [`1-pass-to-children`](https://github.com/Vinai/example-module-tictactoe/tree/1-pass-to-children)  
  State is managed in the root component and passed to each child.

* [`2-external-state`](https://github.com/Vinai/example-module-tictactoe/tree/2-external-state)  
  State is managed in an external object.


This module was created written as an example for my presentation at MageTitansIT 2018 in Milano.

(c) Vinai Kopp 
