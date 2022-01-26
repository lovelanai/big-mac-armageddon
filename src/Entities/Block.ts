class Block extends Entity {
    collisionSides: undefined | { left: boolean, right: boolean, top: boolean, bottom: boolean }
    constructor(position: p5.Vector, fill: string | p5.Image, isSolid: boolean, damage: boolean, collisionSides?: { left: boolean, right: boolean, top: boolean, bottom: boolean }) {

        super(position, createVector(80, 80), fill, isSolid, damage)
        this.collisionSides = collisionSides;

    }
}
