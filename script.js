function createSquare() {
    const square = document.createElement("div");
    square.setAttribute("style","background-color: white; border: black solid 1px; width: 30px; height: 30px;");
    square.addEventListener("mouseover", event => {
        event.target.setAttribute("style","background-color: gray; border: black solid 1px; width: 30px; height: 30px;")
    });
    return square;
}

function createRow() {
    const row = document.createElement("div");
    row.setAttribute("style","display: flex; justify-content: center; background-color: green;");

    for (let i = 0; i < 16; i++) {
        const square = createSquare();
        row.appendChild(square);
    }

    return row;
}

function createGrid() {
    const attachGrid = document.getElementById("attachGrid");
    const grid = document.createElement("div");
    grid.setAttribute("style", "display: flex; flex-direction: column; background-color: orange;")
    
    for (let i = 0; i < 16; i++) {
        const row = createRow();
        grid.appendChild(row);
    }

    attachGrid.appendChild(grid);
}

createGrid();