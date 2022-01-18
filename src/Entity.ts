class Entity implements Visual {
    position: p5.Vector;
    size: p5.Vector;
    private fill: p5.Image | string;
    private isSolid: boolean;
    private damage: boolean;

    constructor(position: p5.Vector, size: p5.Vector, fill: p5.Image | string, isSolid: boolean, damage: boolean) {
        this.position = position;
        this.size = size;
        this.fill = fill;
        this.isSolid = isSolid;
        this.damage = damage;
    }
    update(): void {

    }
    draw(): void {

    }
    handleCollision(entity: Entity) {
        if (this.isSolid){
            
        }
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