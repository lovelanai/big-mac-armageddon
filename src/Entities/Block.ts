class Block extends Entity {
    constructor() {
        const position = createVector([x][y]) ;

        const size = createVector(50, 50);

        const fill = green;

        const isSolid = true;

        const damage = false;

        super(position, size, fill, isSolid, damage)
    }
}