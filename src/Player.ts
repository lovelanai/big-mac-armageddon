/** egenskaper på "player"
* position, storlek & gravititet */
const gravity = .8;


class Player {
    static update() {
        throw new Error("Method not implemented.");
    }
    position: { x: number; y: number; };
    velocity: { x: number; y: number; };
    width: number;
    height: number;
    constructor() {

        this.position = {
            x: 1100,
            y: 600
        }
        this.velocity = {
            x: 0,
            y: 0,
        }

        this.width = 50;
        this.height = 50;
        

    }
    draw(): void {
        rect(this.position.x, this.position.y, this.width, this.height)
        fill('red')
    }

    update(): void {
        this.draw()
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.position.y + this.height +
            this.velocity.y <= Game.height)
            this.velocity.y += gravity;

    }
}

    /** Stoppar rörelse till höger & vänster */
    const keys = {
        right: {
            pressed: false
        },
        left: {
            pressed: false
        },
    }

    const player = new Player();
    function animate() {
        requestAnimationFrame(animate);
        let scrollOffset = 0;

    if ((keys.right.pressed && player.position.x < 1100) || keys.right.pressed && scrollOffset === 0 && player.position.x > 0){
        player.velocity.x = 8
    } else if (keys.left.pressed && player.position.x > 650) {
        player.velocity.x = -8
    } else {
        player.velocity.x = 0}

}

animate()



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
                if (player.velocity.y === 0) player.velocity.y -= 5
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



