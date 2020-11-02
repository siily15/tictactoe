let isgameOver = false
let gameboard = [
    ['_', '_', '_',],
    ['_', '_', '_',],
    ['_', '_', '_',]
]

const cellDivs = document.querySelectorAll('.cell');

cellDivs.forEach(element => {
    element.addEventListener('click', event => {
        const selectedCell = event.currentTarget
        const selectedRow = selectedCell.dataset.row
        const selectedCol = selectedCell.dataset.col

        if (gameboard[selectedRow][selectedCol] == '_') {
            selectedCell.innerText = 'x'
            gameboard[selectedRow][selectedCol] = 'x'

            console.log(isGameOver())
        }
    })
});

function getEmptyCell() {
    x = Math.floor(Math.random() * 3)
    y = Math.floor(Math.random() * 3)
    do {
        x = 0 - 2
        y = 0 - 2
    } while (gameboard[x][y]);
    return [x, y]

}

function isGameOver() {
    for (let i = 0; i < 3; i++) {
        if (gameboard[i][0] == gameboard[i][1] && gameboard[i][1] == gameboard[i][2] && gameboard[i][0] != '_') {
            return true
        }
        if (gameboard[0][i] == gameboard[1][i] && gameboard[1][i] == gameboard[2][i] && gameboard[0][i] != '_') {
            return true
        }
    }
    if (gameboard[0][0] == gameboard[1][1] && gameboard[1][1] == gameboard[2][2] && gameboard[0][0] != '_') {
        return true
    }
    if (gameboard[0][2] == gameboard[1][1] && gameboard[1][1] == gameboard[2][0] && gameboard[2][0] != '_') {
        return true
    }
    return false
}
