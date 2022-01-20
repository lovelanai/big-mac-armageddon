/// <reference path ="AnimatedEntity.ts"/>

class Enemy extends AnimatedEntity {
    private direction: string;
    constructor(position: p5.Vector, direction: string) {
        let isSolid: boolean;
        let velocity: p5.Vector;
        let acceleration: p5.Vector;
        if (direction === "horizontal") {
            isSolid = true
            velocity = new p5.Vector(3, 0)
            acceleration = new p5.Vector(0, 0.8)
        } else {
            isSolid = false
            velocity = new p5.Vector(0, 3)
            acceleration = new p5.Vector(0, 0.8)
        }

        super(position, new p5.Vector(50, 50), velocity, acceleration, enemyAsset, isSolid, true);
        this.direction = direction;
    }

    handleCollision(entity: Entity, directions: { left: boolean; right: boolean; top: boolean; bottom: boolean; }): void {
        super.handleCollision(entity, directions)
        if (this.direction === "horizontal") {
            if (directions.left) {
                this.velocity.x = Math.abs(this.velocity.x)
                this.acceleration.x = Math.abs(this.acceleration.x)
            }
            else if (directions.right) {
                this.velocity.x = -Math.abs(this.velocity.x)
                this.acceleration.x = -Math.abs(this.acceleration.x)
            }
        } else {
            if (directions.top) {
                this.velocity.y = Math.abs(this.velocity.y)
                this.acceleration.y = Math.abs(this.acceleration.y)
            }
            else if (directions.bottom) {
                this.velocity.y = -Math.abs(this.velocity.y)
                this.acceleration.y = -Math.abs(this.acceleration.y)
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