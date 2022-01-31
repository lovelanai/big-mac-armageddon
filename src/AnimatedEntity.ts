/// <reference path="Entity.ts" />

class AnimatedEntity extends Entity {
    protected velocity: p5.Vector;
    protected acceleration: p5.Vector;
    protected isOnGround: boolean;

    constructor(position: p5.Vector, size: p5.Vector, velocity: p5.Vector, acceleration: p5.Vector, fill: p5.Image | string, isSolid: boolean, damage: boolean) {
        super(position, size, fill, isSolid, damage);
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.isOnGround = false;
    }
    update(): void {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.isOnGround = false;
    }
    handleCollision(entity: Entity, direction: string): void {
        super.handleCollision(entity, direction);
        if (this.isSolid && entity.isSolid) {
            let newPos: p5.Vector;
            switch (direction) {
                case 'bottom':
                    newPos = createVector()
                    this.velocity.y = 0;
                    this.position.y = entity.position.y - this.size.y;
                    this.isOnGround = true;
                    break;
                case 'top':
                    this.position.y = entity.position.y + entity.size.y;
                    this.velocity.y = 0;
                    break;
                case 'left':
                    this.position.x = entity.position.x + entity.size.x;
                    //this.velocity.x = 0;
                    break;
                case 'right':
                    this.position.x = entity.position.x - this.size.x;
                    //this.velocity.x = 0;

            }
        }
    }
    getVelocity(): p5.Vector {
        return this.velocity;
    }
}
