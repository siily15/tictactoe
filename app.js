//let is gameOver = false
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
            let gameOver = false

             //ai Horizontal

             if (gameboard[0][0] == 'x') {
                document.getElementById('10').innerText = 'o';
            }
            if (gameboard[0][1] == 'x') {
                document.getElementById('11').innerText = 'o';
            }
            if (gameboard[0][2] == 'x') {
                document.getElementById('12').innerText = 'o';
            }
            if (gameboard[1][0] == 'x') {
                document.getElementById('00').innerText = 'o';
            }
            if (gameboard[1][1] == 'x') {
                document.getElementById('01').innerText = 'o';
            }
            if (gameboard[1][2] == 'x') {
                document.getElementById('02').innerText = 'o';
            }

            //ai vertigal

            //ai diagonal

            //Horizontal

            if (gameboard[0][0] == 'x' && gameboard[0][1] == 'x' && gameboard[0][2] == 'x') {
                console.log('winner')
            } else {
                gameOver = true
            }
            if (gameboard[1][0] == 'x' && gameboard[1][1] == 'x' && gameboard[1][2] == 'x') {
                console.log('winner')
            } else {
                gameOver = true
            }
            if (gameboard[2][0] == 'x' && gameboard[2][1] == 'x' && gameboard[2][2] == 'x') {
                console.log('winner')
            } else {
                gameOver = true
            }

            //Vertigal

            if (gameboard[0][0] == 'x' && gameboard[1][0] == 'x' && gameboard[2][0] == 'x') {
                console.log('winner')
            } else {
                gameOver = true
            }

            if (gameboard[0][1] == 'x' && gameboard[1][1] == 'x' && gameboard[2][1] == 'x') {
                console.log('winner')
            } else {
                gameOver = true
            }

            if (gameboard[0][2] == 'x' && gameboard[1][2] == 'x' && gameboard[2][2] == 'x') {
                console.log('winner')
            } else {
                gameOver = true
            }

            //Diagonal

            if (gameboard[0][0] == 'x' && gameboard[1][1] == 'x' && gameboard[2][2] == 'x') {
                console.log('winner')
            } else {
                gameOver = true
            }
            if (gameboard[0][2] == 'x' && gameboard[1][1] == 'x' && gameboard[2][0] == 'x') {
                console.log('winner')
            } else {
                gameOver = true
            }
        }
    })
});
