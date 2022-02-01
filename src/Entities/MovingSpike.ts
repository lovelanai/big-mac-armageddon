class MovingSpike extends AnimatedEntity {
    constructor(position: p5.Vector, fill: p5.Image, isSolid: boolean, damage: boolean) {

        super(
            position,
            createVector(80, 80),
            createVector(-3,0),
            createVector(),
            fill,
            isSolid,
            damage
        );
    }
}