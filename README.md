# Tic-Tac-Toe Game: React, TypeScript, and Tailwind CSS

A modern, responsive Tic-Tac-Toe game built using **React**, **TypeScript**, and **Tailwind CSS**. The game provides an intuitive interface with winner detection, draw condition handling, and easy state management with hooks. It also supports game reset functionality.

## Table of Contents
- [Tic-Tac-Toe Game: React, TypeScript, and Tailwind CSS](#tic-tac-toe-game-react-typescript-and-tailwind-css)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [1. Clone the Repository](#1-clone-the-repository)
    - [2. Install Dependencies](#2-install-dependencies)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [State Management](#state-management)
    - [React's useState is used to manage the following states:](#reacts-usestate-is-used-to-manage-the-following-states)
  - [Game Logic](#game-logic)
    - [The game logic is managed using two primary functions:](#the-game-logic-is-managed-using-two-primary-functions)
  - [Draw Detection](#draw-detection)
    - [The game detects a draw when all squares are filled and no winner is found. This is done by checking if all the squares have a value and the winner is null.](#the-game-detects-a-draw-when-all-squares-are-filled-and-no-winner-is-found-this-is-done-by-checking-if-all-the-squares-have-a-value-and-the-winner-is-null)
  - [Responsive Design](#responsive-design)
- [Contributing](#contributing)
  - [Contributions are welcome! To contribute, follow these steps:](#contributions-are-welcome-to-contribute-follow-these-steps)
    - [Feel free to open issues for bugs, new features, or any enhancements.](#feel-free-to-open-issues-for-bugs-new-features-or-any-enhancements)
- [License](#license)
  - [This project is licensed under the MIT License. See the LICENSE file for details.](#this-project-is-licensed-under-the-mit-license-see-the-license-file-for-details)
    - [Explanation of the README file:](#explanation-of-the-readme-file)

## Demo

Try the live version of the game [here](https://tic-tac-toe-rust-chi.vercel.app/).

## Features

- **Winner and Draw Detection**: Detects when a player wins or when the game ends in a draw.
- **Responsive Design**: The layout adjusts smoothly to mobile, tablet, and desktop screen sizes using Tailwind's responsive utilities.
- **Modular Code**: Reusable components for the board and individual squares, following best practices for separation of concerns.
- **Restart Game Functionality**: Reset the game with a click to start a new match.

## Technologies

This project was built with the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Tailwind CSS**: A utility-first CSS framework for designing responsive and clean UI.
- **Vite** (or Create React App): Build tool that offers fast development and optimized builds.

## Installation

Follow these steps to set up the project on your local machine:

### Prerequisites

Ensure you have **Node.js** and **npm** or **yarn** installed on your system. You can download Node.js [here](https://nodejs.org/).

### 1. Clone the Repository

```bash
git clone https://github.com/JasrajChouhan/tic-tac-toe-react-ts.git
cd tic-tac-toe-react-ts

```

### 2. Install Dependencies
 Run the following command to install the required dependencies:

`For npm:`

```bash
npm install
```

`For yarn:`
```bash
yarn install
```

## Usage

1. Playing the Game
2. The game alternates turns between Player X and Player O.
3. When a player wins, the game displays the 4.winner.
4. If no one wins and the board is full, the game will declare a draw.
5. Press the "Restart" button to reset the game board and start a new round.


## Project Structure
```bash
.
├── src
│   ├── components
│   │   ├── Board.tsx           # Renders the game board (3x3 grid)
│   │   ├── BoardSquare.tsx     # Represents individual squares on the board
│   │   └── BoardContainer.tsx  # Handles state management and game logic
│   ├── App.tsx                 # Root component that renders the game
│   ├── index.tsx               # Entry point of the application
│   └── styles
│       └── index.css           # Tailwind CSS imports and custom styles
├── public
│   ├── index.html              # Main HTML template
├── package.json                # Project dependencies and scripts
└── tailwind.config.js          # Tailwind CSS configuration file

```


## State Management
### React's useState is used to manage the following states:

1. squares: An array representing the state of the 9 squares on the board.
2. xIsNext: A boolean indicating whether Player X is the next to play.
3. status: A string indicating the current status of the game (winner, draw, or the next player).



## Game Logic
### The game logic is managed using two primary functions:

`calculateWinner(squares: Array<string | null>):`

Checks if any player has matched a row, column, or diagonal, returning the winning player if found.

`handleClick(index: number):`

Handles the click event for a square. Updates the state based on the player's move and calls calculateWinner to check for a win.

## Draw Detection
### The game detects a draw when all squares are filled and no winner is found. This is done by checking if all the squares have a value and the winner is null.



```tsx
const isDraw = squares.every(square => square !== null) && !winner;
```

## Responsive Design
1. The game layout is styled using Tailwind CSS to be fully responsive.
The grid system (grid-cols-3) and spacing (gap-4) ensure the game board scales correctly on different screen sizes.
2. Tailwind's mobile-first utilities help adjust the UI seamlessly for mobile, tablet, and desktop.


# Contributing
## Contributions are welcome! To contribute, follow these steps:

1.Fork the repository.

2.Create a feature branch (`git checkout -b feature-branch`).

3.Make your changes and commit them (`git commit -m "Add new feature"`).

4.Push the changes to your fork (`git push origin feature-branch`).

5.Create a `pull request` describing the changes.

### Feel free to open issues for bugs, new features, or any enhancements.

# License
## This project is licensed under the MIT License. See the LICENSE file for details.





### Explanation of the README file:

1. **Demo**: A section where you can add a link to the live demo of the project.
2. **Features**: Lists the main features of the project, including winner and draw detection, responsive design, and modular structure.
3. **Technologies**: Lists the key technologies used in the project like React, TypeScript, and Tailwind CSS.
4. **Installation**: Step-by-step guide for cloning the repository, installing dependencies, and running the application locally.
5. **Usage**: A simple guide to play the game, including the logic for detecting the winner or a draw.
6. **Project Structure**: Provides a tree of the project folder structure, with explanations for key components.
7. **State Management**: Explains how `useState` is used to manage the game state.
8. **Game Logic**: Details the logic for calculating the winner and handling clicks on the squares.
9. **Responsive Design**: Mentions how Tailwind CSS utilities are used to make the game responsive.
10. **Contributing**: Instructions for contributing to the project.
11. **License**: Specifies that the project is licensed under the MIT license.

This complete markdown file will help developers and contributors understand your project, set it up locally, and contribute effectively.
