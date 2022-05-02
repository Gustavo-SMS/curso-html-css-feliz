const btnRight = document.querySelector('.button-arrow.-right')
const elements = document.querySelector('.elements')

let pixels = 100

btnRight.addEventListener('click', () => {
    pixels += 100
    elements.style = `transform: translateX(${pixels}px)`
})