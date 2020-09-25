let gameboard = [
    ['_', '_', '_',],
    ['_', '_', '_',],
    ['_', '_', '_',]
]

const winningsSums = [7, 56, 73, 84, 146, 273, 292, 448]

const cellDivs = document.querySelectorAll('.cell');

cellDivs.forEach(element => {
    element.addEventListener('click', event => {
        const selectedCell = event.currentTarget
        const selectedRow = selectedCell.dataset.row
        const selectedCol = selectedCell.dataset.col

        if (gameboard[selectedRow][selectedCol] == '_') {
            selectedCell.innerText = 'x'
            gameboard[selectedRow][selectedCol] = 'x'

            //Horizontal

            if (gameboard[0][0] == 'x' && gameboard[0][1] == 'x' && gameboard[0][2] == 'x') {
                console.log('winner')
            }
            if (gameboard[1][0] == 'x' && gameboard[1][1] == 'x' && gameboard[1][2] == 'x') {
                console.log('winner')
            }
            if (gameboard[2][0] == 'x' && gameboard[2][1] == 'x' && gameboard[2][2] == 'x') {
                console.log('winner')
            }

            //Vertigal

            if (gameboard[0][0] == 'x' && gameboard[1][0] == 'x' && gameboard[2][0] == 'x') {
                console.log('winner')
            }

            if (gameboard[0][1] == 'x' && gameboard[1][1] == 'x' && gameboard[2][1] == 'x') {
                console.log('winner')
            }

            if (gameboard[0][2] == 'x' && gameboard[1][2] == 'x' && gameboard[2][2] == 'x') {
                console.log('winner')
            }

            //Diagonal

            if (gameboard[0][0] == 'x' && gameboard[1][1] == 'x' && gameboard[2][2] == 'x') {
                console.log('winner')
            }
            if (gameboard[0][2] == 'x' && gameboard[1][1] == 'x' && gameboard[2][0] == 'x') {
                console.log('winner')
            }
            console.log(gameboard)
        }
    })
});
