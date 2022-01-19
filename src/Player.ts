/// <reference path ="AnimatedEntity.ts"/>






class Player extends AnimatedEntity {


    constructor() {
        super(new p5.Vector(0, 0), new p5.Vector(170, 500), new p5.Vector(0, 0), new p5.Vector(0, 0), new p5.Image, true, false)

    }

    draw(): void {
        super.draw();

    }

    update(): void {
        
    }


}

const player = new Player



/** Stoppar rörelse till höger & vänster */
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
}

    


//     function animate() {
//         requestAnimationFrame(animate);
//         let scrollOffset = 0;

//         /** Gör att "player" rör sig vid knapptryck och stannar vid knapplyft */
//         if ((keys.right.pressed && player.position.x < 1100) || keys.right.pressed && scrollOffset === 0 && player.position.x > 0){
//             player.velocity.x = 8
//         } else if (keys.left.pressed && player.position.x > 650) {
//             player.velocity.x = -8
//         } else {
//             player.velocity.x = 0
//         }
// }

// animate()



window.addEventListener('keydown', ({ keyCode }) => {

    switch (keyCode) {
        case 65:
            keys.left.pressed = true
            console.log('left')
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



/** Lägger till eventlyssnare för knapplyft */
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



