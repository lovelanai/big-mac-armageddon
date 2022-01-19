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
        rect(this.position.x, this.position.y, this.size.x, this.size.y)
        if(typeof this.fill==='string'){
            fill(this.fill)
        }
    }
    handleCollision(entity: Entity, directions: { left: boolean; right: boolean; top: boolean; bottom: boolean; }): void {
        if (this.isSolid){
            
        }
    }
    getDamage(): boolean {
        return this.damage;
    }
}