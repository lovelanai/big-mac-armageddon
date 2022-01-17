class Entity implements Visual {
    position: p5.Vector;
    bounds: p5.Vector;
    private fill: p5.Image | string;
    private damage: boolean;
    private collisions: { left: Set<Entity>, right: Set<Entity>, up: Set<Entity>, down: Set<Entity> };

    constructor(position: p5.Vector, bounds: p5.Vector, fill: p5.Image | string, isSolid: boolean, damage: boolean) {
        this.position = position;
        this.bounds = bounds;
        this.fill = fill;
        this.damage = damage;
        this.collisions = {
            left: new Set<Entity>(),
            right: new Set<Entity>(),
            up: new Set<Entity>(),
            down: new Set<Entity>(),
        }
    }
    update(): void {

    }
    draw(): void {

    }
    handleCollision(entity: Entity){
        entity;
    }
    getCorners(): p5.Vector[] {
        return [this.position];
    }
    getDamage(): boolean {
        return this.damage;
    }
    setCollisions(): void {
    }
}