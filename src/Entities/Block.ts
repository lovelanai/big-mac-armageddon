class Block extends Entity {
    readonly collisionSides: undefined | { left: boolean, right: boolean, top: boolean, bottom: boolean }
    constructor(position: p5.Vector, fill: string | p5.Image, isSolid: boolean, damage: boolean, collisionSides?: { left: boolean, right: boolean, top: boolean, bottom: boolean }) {

        super(position, createVector(80, 80), fill, isSolid, damage)
        if (collisionSides !== undefined) {
            this.collisionSides = collisionSides;
            //If you can't collide with it from any direction, why make it solid?
            if (!(collisionSides.left || collisionSides.right || collisionSides.top || collisionSides.bottom)) {
                this.isSolid = false;
            }
        }

    }
}
