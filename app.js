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

        if ( gameboard[selectedRow][selectedCol])

        selectedCell.innerText = 'X'

        gameboard[selectedRow][selectedCol] = 'x'

        console.log(gameboard)

        console.log(selectedCell.dataset.row)
        console.log(selectedCell.dataset.col)
    })
});
console.log(cellDivs[0].dataset.row)
