class Player extends Entity {
    
    draw(): void {
        background('white')
        rect(this.position.x, this.position.y, 50, 50)
        fill('red')
    }
}


const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
}

window.addEventListener('keydown', ({ keyCode }) => {

    switch (keyCode) {
        case 65:
            console.log('left')
            keys.left.pressed = true
            break

        case 68:
            console.log('right')
            keys.right.pressed = true
            break

        case 87:
            console.log('up')
            break
    }

})

window.addEventListener('keyup', ({ keyCode }) => {

    switch (keyCode) {
        case 65:
            keys.left.pressed = false
            console.log('left-up')
            break

        case 68:
            keys.right.pressed = false
            console.log('right-up')
            break


    }

})


