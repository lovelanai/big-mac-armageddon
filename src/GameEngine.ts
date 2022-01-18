class GameEngine implements Visual {
    livesNumber: number;
    entities: Set<Entity>;

    constructor(livesNumber: number) {
        this.livesNumber = livesNumber;
        this.entities = new Set<Entity>();
    }

    update(): void {

    }
    draw(): void {

    }
    die(): void { }

    private checkCollisions() {
        const entities = Array.from(this.entities);

        while (entities.length >= 2) {
            const e0 = entities.pop(); //Remove from entities so it won't be checked more than once
            //if (e0?.position === undefined) throw new ReferenceError('Undefined entity position'); //Apparently TS needs this in order to not freak out
            for (const e1 of entities) {
                const delta = p5.Vector.sub(e1?.position, e0?.position);

            }
        }
    }
}