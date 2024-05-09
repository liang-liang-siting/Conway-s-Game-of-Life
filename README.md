# Conway's Game of Life

Conway’s Game of Life (or just Life) is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. The game is played on a grid of cells, where each cell can be either alive or dead.

## Core Functionality

Life operates based on the following rules:

1. A living cell with fewer than two living neighbors dies of underpopulation.
2. A living cell with two or three live neighbors lives on to the next generation.
3. A living cell with more than three live neighbors dies of overcrowding.
4. A dead cell with exactly three live neighbors becomes a live cell through reproduction.

These rules determine the state of each cell in the grid for the next iteration. 

## Website Features

### Grid Display

- Users are presented with a 20x20 grid upon opening the game.
- They can specify the grid's height and width within the range of 3-40 using input fields and a submit button.
- If an invalid input is provided, an error message is displayed, prompting the user to input a valid range.

### Initial Configuration

- Upon creating a new grid, cells are randomly set as alive (black) or dead (white) with a 5% chance of being alive.
- Users can click on any cell to toggle its state between alive and dead.

### Heatmap Display

- Users can switch between regular colors and a heatmap display.
- The heatmap indicates how recently a cell was alive using a color gradient.

### Control Buttons

- Two buttons are provided below the grid:
  - One resets the grid according to the specified height and width.
  - The other progresses the simulation by one step.

### Live Cell Counter

- The number of currently living cells is displayed somewhere on the screen.

## Contributors

- [Siting Liang](https://github.com/liang-liang-siting) 

- [Guotong Liao](https://github.com/GlintonLiao)

