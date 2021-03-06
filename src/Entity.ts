let entityList = new Array<Entity>(); //For debugging

class Entity implements Visual {
    public position: p5.Vector;
    public size: p5.Vector;
    protected fill: p5.Image | string;
    public isSolid: boolean;
    protected damage: boolean;
    protected imageTransform: undefined | {
        sx: number,
        sy: number,
        dWidth: number,
        dHeight: number
    }

    public id: number; //For debugging

    /** Skapar en entity / placeras sedan ut i LevelGenerator.ts */
    constructor(position: p5.Vector, size: p5.Vector, fill: p5.Image | string, isSolid: boolean, damage: boolean) {
        this.position = position;
        this.size = size;
        this.fill = fill;
        this.isSolid = isSolid;
        this.damage = damage;

        this.id = entityList.length;
        entityList.push(this);
    }

    /** Uppdaterar spelet */
    update(): void {
    }

    /** Ritar ut entities */
    draw(): void {
        //Don't draw if it won't be visible anyway
        if (
            this.position.x > width ||
            this.position.x < -this.size.x ||
            this.position.y > height ||
            this.position.y < -this.size.y
        ) return;
        if (typeof this.fill === 'string') {
            if (this.fill === 'invis') {
                fill(50, 150, 255, map(this.position.x, 250, -80, 0, 255, true))
            }
            else {
                fill(this.fill);
            }
            noStroke();
            rect(this.position.x, this.position.y, this.size.x, this.size.y)
        }

        else if (this.fill.constructor === p5.Image) {
            push();
            translate(this.position.x - (this.fill.width - this.size.x) / 2, 0);
            image(this.fill, 0, this.position.y, this.fill.width, this.fill.height)
            pop();
        }
        /*         push();
                noFill();
                stroke(this.getDamage() ? 'red' : 'black');
                rect(this.position.x, this.position.y, this.size.x, this.size.y)
                pop(); */
        /* push();
        textSize(16);
        text(this.id, this.position.x, this.position.y);
        pop(); */
    }

    /** Hanterar kollisionen av entities */
    handleCollision(entity: Entity, direction: string) {
        if (this.isSolid) {
            entity;
            direction;
        }
    }

    /** F??r hur mycket skada en entity g??r */
    getDamage(): boolean {
        return this.damage;
    }
    getVelocity(): p5.Vector {
        return createVector();
    }
}