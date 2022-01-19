/// <reference path ="AnimatedEntity.ts"/>

class Enemy extends AnimatedEntity {
    private direction: string;
    constructor(position: p5.Vector, direction: string;) {
        super(position, new p5.Vector(50, 50), new p5.Vector(0, 0), new p5.Vector(0, 0.8), enemyAsset, true, true)
        
    }

    handleCollision(entity: Entity, directions: { left: boolean; right: boolean; top: boolean; bottom: boolean; }): void {
        super.handleCollision(entity, directions)
        if (directions.left) {
            this.velocity.x = Math.abs(this.velocity.x)
            this.acceleration.x = Math.abs(this.acceleration.x)
        }
        else if (directions.right) {
            this.velocity.x = -Math.abs(this.velocity.x)
            this.acceleration.x = -Math.abs(this.acceleration.x)
        }
    }

}