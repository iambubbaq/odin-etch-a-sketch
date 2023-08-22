function createGrid(num = 16) {
    for (let i = 0; i < num; i++) {
        let sketchboard = document.querySelector("#sketchboard");
        let gridRow = document.createElement("div");
        gridRow.className = "row";
        sketchboard.appendChild(gridRow);
        for (let i = 0; i < num; i++) {
            let gridSquare = document.createElement("div");
            gridSquare.className = "gridSquare";
            gridSquare.addEventListener("mouseover", event => {
                gridSquare.style.backgroundColor = "black";
            });
            let divheight = sketchboard.clientHeight;
            let height = `${divheight}`/parseInt(num);
            let width = height;
            gridSquare.style.height = `${height}px`
            gridSquare.style.width = `${width}px`
            gridRow.appendChild(gridSquare);
        }
    }
};

function clear() {
    let gridSquare = document.querySelectorAll(".gridSquare");
    gridSquare.forEach((item) => item.style.backgroundColor = "white");
}

function newGrid() {
    let sketchboard = document.querySelector("#sketchboard");
    sketchboard.innerHTML = "";
    gridSize = prompt("Enter number of squares per side must be between 2 and 100")
    if (gridSize > 100 || gridSize < 2) {
        alert("Must be between 2 and 100");
        newGrid();
    } else {
        createGrid(gridSize);
    }
}

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clear);
let newGridButton = document.querySelector(".newGrid");
newGridButton.addEventListener("click", newGrid);


createGrid(16);