class Entity implements Visual {
    position: p5.Vector;
    size: p5.Vector;
    private fill: p5.Image | string;
    private damage: boolean;
    

    constructor(position: p5.Vector, size: p5.Vector, fill: p5.Image | string, isSolid: boolean, damage: boolean) {
        this.position = position;
        this.size = size;
        this.fill = fill;
        this.damage = damage;
    }
    update(): void {

    }
    draw(): void {
        console.log('entity.ts')
    }
    getCorners(): p5.Vector[] {
        return [this.position];
    }
    getDamage(): boolean {
        return this.damage;
    }
}