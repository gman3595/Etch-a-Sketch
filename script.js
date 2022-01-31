"use strict";

const container = document.querySelector("#container");
const clearGridBtn = document.querySelector("button");

// Makes X x Y Grid
function makeGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";

    const gridCells = document.querySelectorAll(".grid-item");

    // Adds blue background to cell following mouseover
    gridCells.forEach((gridCell) =>
      gridCell.addEventListener("mouseover", (e) => {
        e.target.classList.add("mouseover-color");
      })
    );
  }
}

makeGrid(16, 16);

// Clears cell backgrounds and creates new X x Y grid
clearGridBtn.addEventListener("click", (e) => {
  removeColorTrail();
  generateNewGrid();
});

// Removes background color from mousedover cells
function removeColorTrail() {
  const coloredGridCells = document.querySelectorAll(".mouseover-color");

  coloredGridCells.forEach((coloredGridCell) =>
    coloredGridCell.classList.remove("mouseover-color")
  );
}

// Generates new grid
function generateNewGrid() {
  let newGridSize = parseInt(
    prompt("What dimensions do you want your new grid to be? Input a number."),
    10
  );

  clearGrid();

  makeGrid(newGridSize, newGridSize);
}

// Clears grid of existing child divs
function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
