/// <reference path="Entity.ts" />

class AnimatedEntity extends Entity {
    protected velocity: p5.Vector;
    protected acceleration: p5.Vector;

    constructor(position: p5.Vector, size: p5.Vector, velocity: p5.Vector, acceleration: p5.Vector, fill: p5.Image | string, isSolid: boolean, damage: boolean) {
        super(position, size, fill, isSolid, damage);
        this.velocity = velocity;
        this.acceleration = acceleration;
    }
    update(): void {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);

    }
    handleCollision(entity: Entity, directions: { left: boolean; right: boolean; top: boolean; bottom: boolean; }): void {
        super.handleCollision(entity, directions);
        if (this.isSolid && entity.isSolid) {

            if (directions.bottom) {
                this.position.y = entity.position.y - this.size.y;
                this.velocity.y = Math.min(0, this.velocity.y);
            }
            else if (directions.top) {
                this.position.y = entity.position.y + entity.size.y;
                this.velocity.y = Math.max(0, this.velocity.y);
            }
            else if (directions.left) {
                this.position.x = entity.position.x + entity.size.x;
                this.velocity.x = Math.max(0, this.velocity.x);
            }
            else if (directions.right) {
                this.position.x = entity.position.x - this.size.x;
                this.velocity.x = Math.min(0, this.velocity.x);
            }
        }
    }
}
}