const container = document.querySelector("#container");

function makeSquare() {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}

function makeGrid() {
    for (let i = 0; i < 256; i++) {
        makeSquare();
    }
}

makeGrid();


