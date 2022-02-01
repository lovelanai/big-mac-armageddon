class GameEngine implements Visual {
    livesNumber: number;
    entities: Set<Entity>;
    private collidableEntities: {
        static: Set<Entity>,
        animated: Set<AnimatedEntity>
    };
    speed = 0;
    player: Player;
    private allowedKeys: Set<number>
    backgroundX: number;
    constructor(livesNumber: number) {
        this.livesNumber = livesNumber;

        /* this.entities = new Set<Entity>();
        this.entities.add(new Entity(new p5.Vector(160, 400), new p5.Vector(1100, 50), 'green', true, false));
        this.entities.add(new AnimatedEntity(new p5.Vector(1060, -300), new p5.Vector(100, 50), new p5.Vector(0, 16), new p5.Vector(0, .8), 'blue', true, false)); */
        const generator = new Generator();
        this.entities = generator.getNextLevelEntities()

        this.player = new Player();
        this.entities.add(this.player);
        this.collidableEntities = {
            static: new Set<Entity>(),
            animated: new Set<AnimatedEntity>()
        };
        for (const e of this.entities) {
            if (e.isSolid || e.getDamage()) {
                if (e instanceof AnimatedEntity) {
                    this.collidableEntities.animated.add(e);
                }
                else {
                    this.collidableEntities.static.add(e);
                }
            }
        }


        this.allowedKeys = new Set<number>([65, 68, 87, ENTER]);
        this.backgroundX = -17000;
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

                // Prevents player from moving while only pressing 'W'
                if (!keyIsDown(65) && !keyIsDown(68)) {
                    this.speed = 0
                }

            }
            if (!this.allowedKeys.has(keyCode)) {
                this.die();
            }
        }

        else {
            this.speed = 0;
            this.allowedKeys.delete(ENTER);
        }


        this.player.setSpeed(this.speed);
        for (const e of this.entities) {
            e.update();
        }
        this.detectCollisions();
        this.pan();
    }
    draw(): void {
        image(images.gameBackground, this.backgroundX, 0);
        for (const e of this.entities) {
            e.draw();
        }

        if (this.player.getIsDead()) {
            const y = this.player.position.y
            let alpha = max(0, min(norm(y, this.player.deathHeight, 0), 1));
            push()
            fill(color(`rgba(0,0,0,${alpha})`));
            rect(0, 0, width, height)
            pop()
            this.player.draw();
        }
        //DEAAAAAAATHCOUNTER
        deathCounter = new DeathCounter(nrOfLives);
        deathCounter.draw();
    }
    pan(): void {
        const offset = width / 2 - this.player.position.x;
        for (const e of this.entities) {
            e.position.x += offset;
        }
        this.backgroundX += offset / 5;
    }
    die(): void {
        this.player.die();
    }

    private detectCollisions() {

        for (const e0 of this.collidableEntities.animated) {
            for (const e1 of this.collidableEntities.static) {
                this.detectCollision(e0, e1);
            }
        }

        const animatedEntities = Array.from(this.collidableEntities.animated);
        while (animatedEntities.length >= 2) {
            const e0 = animatedEntities.pop(); //Remove from entities so it won't be checked more than once
            if (e0?.position === undefined) throw new ReferenceError('Undefined entity position. You\'ve screwed up pretty bad.'); //Apparently TS needs this in order to not freak out
            for (const e1 of animatedEntities) {
                this.detectCollision(e0, e1);
            }
        }
    }
    private detectCollision(e0: Entity, e1: Entity): void {
        let relVel = p5.Vector.sub(e0.getVelocity(), e1.getVelocity());


        //Entities can't collide if they're moving at the same velocity (note: velocity not speed)
        if (relVel.x !== 0 || relVel.y !== 0) {

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
                x: Tools.overlap([box0.left, box0.right], [box1.left, box1.right]),
                y: Tools.overlap([box0.top, box0.bottom], [box1.top, box1.bottom]),
                /* left: Tools.isBetween(box0.left, box1.left, box1.right),
                right: Tools.isBetween(box0.right, box1.left, box1.right),
                top: Tools.isBetween(box0.top, box1.top, box1.bottom),
                bottom: Tools.isBetween(box0.bottom, box1.top, box1.bottom) */
            };

            if (
                [e0.id, e1.id].indexOf(192) !== -1 &&
                [e0.id, e1.id].indexOf(432) !== -1 &&
                this.player.position.x > 640
            ) {
                debugger;
            }
            //There must be overlap in both x and y
            if (overlap0.x && overlap0.y) {
                //If e0 is moving right and down relative to e1, it must be its right or bottom side that's colliding, etc
                let edges0 = createVector(
                    relVel.x > 0 ? box0.right : box0.left,
                    relVel.y >= 0 ? box0.bottom : box0.top
                );
                let edges1 = createVector(
                    relVel.x > 0 ? box1.left : box1.right,
                    relVel.y >= 0 ? box1.top : box1.bottom
                );

                let backTrackFactor = p5.Vector.sub(edges0, edges1);
                backTrackFactor.x /= relVel.x;
                backTrackFactor.y /= relVel.y;
                let direction0 = 'none';

                let xDir0 = relVel.x > 0 ? 'right' : 'left';
                let yDir0 = relVel.y >= 0 ? 'bottom' : 'top';
                let collidable = { x: true, y: true };
                if (e0 instanceof Block && e0?.collisionSides !== undefined) {
                    collidable.x = e0.collisionSides[xDir0 === 'left' ? 'left' : 'right'];
                    collidable.y = e0.collisionSides[yDir0 === 'bottom' ? 'bottom' : 'top'];
                }
                if (e1 instanceof Block && e1?.collisionSides !== undefined) {
                    collidable.x &&= e1.collisionSides[xDir0 === 'left' ? 'right' : 'left'];
                    collidable.y &&= e1.collisionSides[yDir0 === 'bottom' ? 'top' : 'bottom'];
                }

                if (
                    collidable.x &&
                    abs(backTrackFactor.x) < min(abs(backTrackFactor.y), 1.1)
                ) {
                    direction0 = xDir0;
                } else if (collidable.y && abs(backTrackFactor.y) < 1.1) {
                    direction0 = yDir0;
                }
                e0.handleCollision(e1, direction0);
                let direction1 = Tools.swap(direction0, 'left', 'right');
                direction1 = Tools.swap(direction1, 'top', 'bottom');
                e1.handleCollision(e0, direction1);
            }
        }
    }
}

function muteDeath() {
    sound.backGroundMusic.setVolume(3);
    sound.backGroundMusic.pan(-1, 10);

}