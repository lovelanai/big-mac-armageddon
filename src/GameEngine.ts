class GameEngine implements Visual {
    livesNumber: number;
    entities: Set<Entity>;
    speed = 0;
    player: Player;

    constructor(livesNumber: number) {
        this.livesNumber = livesNumber;

        /* this.entities = new Set<Entity>();
        this.entities.add(new Entity(new p5.Vector(160, 400), new p5.Vector(1100, 50), 'green', true, false));
        this.entities.add(new AnimatedEntity(new p5.Vector(1060, -300), new p5.Vector(100, 50), new p5.Vector(0, 16), new p5.Vector(0, .8), 'blue', true, false)); */
        const generator = new Generator();
        this.entities = generator.getNextLevelEntities()

        this.player = new Player();
        this.entities.add(this.player);
    }

    update(): void {
        if (keyIsPressed) {

            if (keyIsDown(65)) {//A
                this.speed = -15//-= Math.random();
            }
            if (keyIsDown(68)) {//D
                this.speed = 15//+= Math.random();

            }
            if (keyIsDown(87)) {//W
                this.player.jump();
            }
            if ([65, 68, 87].indexOf(keyCode) === -1) {
                this.die();
            }
            this.walk();
        }

        else {
            this.speed = 0;
        }

        this.player.setSpeed(this.speed);
        for (const e of this.entities) {
            e.update();
        }
        this.detectCollisions();
        this.pan();
    }
    draw(): void {
        for (const e of this.entities) {
            e.draw();
        }
    }
    pan(): void {
        const offset = width / 2 - this.player.position.x;
        for (const e of this.entities) {
            e.position.x += offset;
        }
    }
    die(): void {
        console.log('You died');
    }

    private detectCollisions() {
        const entities = Array.from(this.entities);
        while (entities.length >= 2) {
            const e0 = entities.pop(); //Remove from entities so it won't be checked more than once
            if (e0?.position === undefined) throw new ReferenceError('Undefined entity position. You\'ve screwed up pretty bad.'); //Apparently TS needs this in order to not freak out
            for (const e1 of entities) {
                let relVel = p5.Vector.sub(e0.getVelocity(), e1.getVelocity())

                let box0 = {
                    left: e0.position.x,
                    right: e0.position.x + e0.size.x,
                    top: e0.position.y,
                    bottom: e0.position.y + e0.size.y
                };
                let box1 = {
                    left: e1.position.x,
                    right: e1.position.x + e1.size.x,
                    top: e1.position.y,
                    bottom: e1.position.y + e1.size.y
                };


                const overlap0 = {
                    left: Tools.isBetween(box0.left, box1.left, box1.right) ? (box1.right - box0.left) - relVel.x : Infinity,
                    right: Tools.isBetween(box0.right, box1.left, box1.right) ? box0.right - box1.left - relVel.x : Infinity,
                    top: Tools.isBetween(box0.top, box1.top, box1.bottom) ? box0.top - box1.bottom - relVel.y : Infinity,
                    bottom: Tools.isBetween(box0.bottom, box1.top, box1.bottom) ? box0.bottom - box1.top - relVel.y : Infinity
                }

                if (
                    box0.left < box1.right &&
                    box0.right > box1.left &&
                    box0.top < box1.bottom &&
                    box0.bottom > box1.top
                ){
                    //Look for the smallest overlap since that's probably the direction of the collision
                    let minOverlap = overlap0.bottom;
                    let direction0 = 'bottom';
                    if (overlap0.left < minOverlap) {
                        minOverlap = overlap0.left;
                        direction0 = 'left';
                    }
                    if (overlap0.right < minOverlap) {
                        minOverlap = overlap0.right;
                        direction0 = 'right';
                    }
                    if (overlap0.top < minOverlap) {
                        minOverlap = overlap0.top;
                        direction0 = 'top';
                    }

                    if (minOverlap === Infinity) throw new Error('This should be logically impossible');
                    e0.handleCollision(e1, direction0);
                    let direction1 = Tools.swap(direction0, 'left', 'right');
                    direction1 = Tools.swap(direction1, 'top', 'bottom');
                    e1.handleCollision(e0, direction1);

                }

            }
        }
    }
}