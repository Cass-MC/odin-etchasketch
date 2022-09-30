function createSquare() {
    const square = document.createElement("div");
    square.setAttribute("style","background-color: white; border: black solid 1px; flex: 1 1 auto;");
    square.addEventListener("mouseover", event => {
        event.target.setAttribute("style","background-color: gray; border: black solid 1px; flex: 1 1 auto;")
    });
    return square;
}

function createRow() {
    const row = document.createElement("div");
    row.setAttribute("style","display: flex; justify-content: center; width: 560px; flex: 1 1 auto;");

    for (let i = 0; i < 16; i++) {
        const square = createSquare();
        row.appendChild(square);
    }

    return row;
}

function createGrid(numberInput) {
    const attachGrid = document.getElementById("attachGrid");
    const grid = document.createElement("div");
    grid.setAttribute("style", "display: flex; flex-direction: column; align-items: center; height: 560px;")
    grid.setAttribute("id","gridDiv");
    
    for (let i = 0; i < 16; i++) {
        const row = createRow();
        grid.appendChild(row);
    }

    attachGrid.appendChild(grid);
}

function askNewGrid() {
    const newGridBtn = document.getElementById("newGridBtn");
    let numberInput = "";
    newGridBtn.addEventListener("click", () => {
        numberInput = prompt("How many squares?");
        clearGrid();
    })
}

function clearGrid() {
    const attachGrid = document.getElementById("attachGrid");
    const grid = document.getElementById("gridDiv");
    attachGrid.removeChild(grid);
}

askNewGrid();
createGrid();