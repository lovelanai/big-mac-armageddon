class Entity implements Visual {
    position: p5.Vector;
    size: p5.Vector;
    protected fill: p5.Image | string;
    isSolid: boolean;
    protected damage: boolean;

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
        if (typeof this.fill === 'string') {
            fill(this.fill)

            rect(this.position.x, this.position.y, this.size.x, this.size.y)
        }

        else if (this.fill.constructor === p5.Image) {
            image(this.fill, this.position.x, this.position.y, this.size.x, this.size.y, 0, 0, this.size.x * 2, this.size.y * 2)
            
        }
    }

    /** Hanterar kollisionen av entities */
    handleCollision(entity: Entity, directions: { left: boolean, right: boolean, top: boolean, bottom: boolean }) {
        if (this.isSolid) {

        }
    }

    /** Får hur mycket skada en entity gör */
    getDamage(): boolean {
        return this.damage;
    }
}