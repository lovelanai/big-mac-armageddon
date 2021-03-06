/// <reference path ="../AnimatedEntity.ts"/>


class Enemy extends AnimatedEntity {
    private direction: string;
    constructor(position: p5.Vector, direction: string) {
        let isSolid: boolean;
        let velocity: p5.Vector;
        let acceleration: p5.Vector;
        if (direction === "horizontal") {
            isSolid = true
            velocity = createVector(3, 0)
            acceleration = createVector(0, 0.8)
            //Horizontal enemies need just a bit more space in order to not fall through the floor
            position.y -= 20
        } else {
            isSolid = false
            velocity = createVector(0, 4)
            acceleration = createVector(0, 0)
        }
        super(position, createVector(70, 92), velocity, acceleration, images.bkFries, isSolid, true);
        this.direction = direction;
    }

    handleCollision(entity: Entity, direction: string): void {
        super.handleCollision(entity, direction)
        if (this.direction == "horizontal") {
            switch (direction) {
                case 'left':
                    this.velocity.x = Math.abs(this.velocity.x)
                    // this.acceleration.x = Math.abs(this.acceleration.x)
                    break;
                case 'right':
                    this.velocity.x = -Math.abs(this.velocity.x)
                    // this.acceleration.x = -Math.abs(this.acceleration.x)
                    break;
            }
        } else {
            switch (direction) {
                case 'top':
                    this.velocity.y = Math.abs(this.velocity.y)
                    this.acceleration.y = Math.abs(this.acceleration.y)
                    break;
                case 'bottom':
                    this.velocity.y = -Math.abs(this.velocity.y)
                    this.acceleration.y = -Math.abs(this.acceleration.y)
                    break;
            }
        }

    }

    update(): void {
        if (this.direction == "vertical") {
            if (this.position.y <= 0) {
                this.velocity.y = 4
                this.acceleration.y = 0
            }
            if (this.position.y >= height - this.size.y) {
                this.velocity.y = -4
                this.acceleration.y = 0
            }
        }
        super.update()
    }


}