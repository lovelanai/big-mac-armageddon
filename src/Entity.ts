class Entity implements Visual {
    position: p5.Vector;
    size: p5.Vector;
    protected fill: p5.Image | string;
    isSolid: boolean;
    protected damage: boolean;
    protected imageTransform: undefined | {
        sx: number,
        sy:number,
        dWidth:number,
        dHeight:number
    }

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

        else if (this.fill.constructor === p5.Image && this.imageTransform !== undefined) {
            image(this.fill,  this.position.x, this.position.y, this.imageTransform.dWidth, this.imageTransform.dHeight, this.imageTransform.sx, this.imageTransform.sy)
            
        }
    }

    /** Hanterar kollisionen av entities */
    handleCollision(entity: Entity, direction: string) {
        if (this.isSolid) {

        }
    }

    /** Får hur mycket skada en entity gör */
    getDamage(): boolean {
        return this.damage;
    }
}