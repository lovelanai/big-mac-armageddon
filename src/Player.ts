/// <reference path ="AnimatedEntity.ts"/>






class Player extends AnimatedEntity {
    private timeToChangeFrame = 100;

    constructor() {
        super(createVector(1050,0), createVector(80, 160), createVector(0, 5), createVector(0, 0.8), images.runLeft, true, false)

    }

    public update(): void {
        super.update();

        this.timeToChangeFrame -= deltaTime;
        if (this.timeToChangeFrame < 0) {
            // byt bild
            this.timeToChangeFrame = 100;
        }
    }

    public draw() {
        push()
        scale(-1)
        pop()
        
    }

    jump(): void {
        if(this.isOnGround){
            this.velocity.y = -20;
        }
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


