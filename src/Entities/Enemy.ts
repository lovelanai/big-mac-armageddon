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
        } else {
            isSolid = false
            velocity = createVector(0, 3)
            acceleration = createVector(0, 0.8)
        }

        super(position, createVector(80, 80), velocity, acceleration, images.enemyAsset, isSolid, true);
        this.direction = direction;
    }

    handleCollision(entity: Entity, direction: string): void {
        super.handleCollision(entity, direction)
        if (this.direction === "horizontal") {
            switch (direction) {
                case 'left':
                    this.velocity.x = Math.abs(this.velocity.x)
                    this.acceleration.x = Math.abs(this.acceleration.x)
                    break;
                case 'right':
                    this.velocity.x = -Math.abs(this.velocity.x)
                    this.acceleration.x = -Math.abs(this.acceleration.x)
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
        super.update()
        if (this.direction === "vertical") {
            if (this.position.y <= 0) {
                this.velocity.y = 3
                this.acceleration.y = 0.8
            }
            if (this.position.y >= height - this.size.y) {
                this.velocity.y = -3
                this.acceleration.y = -0.8
            }
        }
    }


}