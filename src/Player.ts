/// <reference path ="AnimatedEntity.ts"/>






class Player extends AnimatedEntity {


    constructor() {
        super(new p5.Vector(1050, 0), new p5.Vector(80, 160), new p5.Vector(0, 0), new p5.Vector(0, .8), runLeft, true, false)

    }
    jump(): void {
        this.velocity.y = -30;
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


