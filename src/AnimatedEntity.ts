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

        if (directions.bottom) {
            this.position.y = entity.position.y - this.size.y;
            this.acceleration.y = 0;
        }
        else if(directions.top){
            //this.position.y=entity.position.
        }
    }


}