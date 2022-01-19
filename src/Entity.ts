class Entity implements Visual {
    position: p5.Vector;
    size: p5.Vector;
    private fill: p5.Image | string;
    private isSolid: boolean;
    private damage: boolean;

/** Skapar en entity / placeras sedan ut i LevelGenerator.ts */
    constructor(position: p5.Vector, size: p5.Vector, fill: p5.Image | string, isSolid: boolean, damage: boolean) {
        this.position = position;
        this.size = size;
        this.fill = fill;
        this.isSolid = isSolid;
        this.damage = damage;
    }

    /** Uppdaterar spelet */
    update(): void {

    }

    /** Ritar ut entities */
    draw(): void {
        console.log('entity.ts')
    }

    /** Hanterar kollisionen av entities */
    handleCollision(entity: Entity) {
        if (this.isSolid){
            
        }
    }

    /** Får hörnen på entities */

    getCorners(): p5.Vector[] {
        return [this.position];
    }

    /** Får hur mycket skada en entity gör och tar */
    getDamage(): boolean {
        return this.damage;
    }

    /** Sätter kollision data på en entity */
    setCollisions(): void {
    }
}