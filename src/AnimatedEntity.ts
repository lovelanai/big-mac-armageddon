/// <reference path="Entity.ts" />

class AnimatedEntity extends Entity {
    protected velocity: p5.Vector;
    protected acceleration: p5.Vector;

    constructor(position: p5.Vector, bounds: p5.Vector, fill: p5.Image | string, isSolid: boolean, damage: boolean) {
        super(position, bounds, fill, isSolid, damage);
        this.velocity = new p5.Vector();
        this.acceleration = new p5.Vector();
    }
    update(): void {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
    }
    handleCollision(entity: Entity, directions: { left: boolean; right: boolean; top: boolean; bottom: boolean; }): void {
        super.handleCollision(entity, directions);
    }


}