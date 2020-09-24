const cellDivs = document.querySelectorAll('.cell')

cellDivs.forEach(el => {
    el.addEventListener('click', Event => {
        console.log(Event.currentTarget)
    })
});

console.log(cellDivs[0].dataset.row);
