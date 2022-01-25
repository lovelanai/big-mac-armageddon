class Block extends Entity {

    constructor(position: p5.Vector, fill: string | p5.Image, isSolid: boolean, damage: boolean) {

        super(position, createVector(80, 80), fill, isSolid, damage)


    }
}
