let y = 0
let x = 0
const box = document.getElementById('box')

function moveAndChangeColor(direction) {
    move(direction);
    getRandomColor();
}

function move(direction) {
    switch (direction) {
        case 'up':
            y -= 10
            break
        case 'down':
            y += 10
            break
        case 'left':
            x -= 10
            break
        case 'right':
            x += 10
    }
    box.style.top = y + 'px'
    box.style.left = x + 'px'
}
function getRandomColor() {
    // Change the color of the box (you can set any color you like)
    box.style.backgroundColor = generateRandomColor();
}

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
document.addEventListener('keydown', (event) => {
    const keyName = event.key
    console.log(keyName)
    switch (keyName) {
        case 'ArrowUp':
            move('up')
            break
        case 'ArrowDown':
            move('down')
            break
        case 'ArrowLeft':
            move('left')
            break
        case 'ArrowRight':
            move('right')
            break
        // w
        case 'w':
            move('up')
            break
        // s
        case 's':
            move('down')
            break
        // a
        case 'a':
            move('left')
            break
        // d
        case 'd':
            move('right')
            break
    }
    getRandomColor();
})