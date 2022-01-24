class FinishBlock extends Entity {
    constructor(position:p5.Vector, fill:string, isSolid:boolean, damage:boolean) {

        super(position, createVector(80,80), fill, isSolid, damage)
    }
}