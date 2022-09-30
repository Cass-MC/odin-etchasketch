function createSquare() {
    const square = document.createElement("div");
    square.setAttribute("style","background-color: white; border: black solid 1px; flex: 1 1 auto;");
    square.addEventListener("mouseover", event => {
        event.target.setAttribute("style","background-color: gray; border: black solid 1px; flex: 1 1 auto;")
    });
    return square;
}

function createRow(numOfSquares = 16) {
    const row = document.createElement("div");
    row.setAttribute("style","display: flex; justify-content: center; width: 560px; flex: 1 1 auto;");

    for (let i = 0; i < numOfSquares; i++) {
        const square = createSquare();
        row.appendChild(square);
    }

    return row;
}

function createGrid(numOfSquares = 16) {
    const attachGrid = document.getElementById("attachGrid");
    const grid = document.createElement("div");
    grid.setAttribute("style", "display: flex; flex-direction: column; align-items: center; height: 560px;")
    grid.setAttribute("id","gridDiv");
    
    for (let i = 0; i < numOfSquares; i++) {
        const row = createRow(numOfSquares);
        grid.appendChild(row);
    }

    attachGrid.appendChild(grid);
}

function askNewGrid() {
    const newGridBtn = document.getElementById("newGridBtn");
    let numberInput = "";
    newGridBtn.addEventListener("click", () => {
        numberInput = prompt("How many squares?");
        if (numberInput > 100) { numberInput = 100; }
        clearGrid();
        createGrid(numberInput);
    })
}

function clearGrid() {
    const attachGrid = document.getElementById("attachGrid");
    const grid = document.getElementById("gridDiv");
    attachGrid.removeChild(grid);
}

askNewGrid();
createGrid();