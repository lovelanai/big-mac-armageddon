class GameEngine implements Visual {
    private entities: Set<Entity>;
    private collidableEntities: {
        static: Set<Entity>,
        animated: Set<AnimatedEntity>
    };
    private speed = 0;
    private player: Player;
    private allowedKeys: Set<number>
    backgroundX: number;
    constructor() {
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

            if (keyIsDown(76)) {//L
                this.speed = -15//-= Math.random();
            }
            if (keyIsDown(71)) {//G
                this.speed = 15//+= Math.random();
            }
            if (keyIsDown(65)) {//A
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
    private pan(): void {
        const offset = width / 2 - this.player.position.x;
        for (const e of this.entities) {
            e.position.x += offset;
        }
        this.backgroundX += offset / 5;
    }
    private die(): void {
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
            //box0 and box1 represent x and y ranges spanned by e0 and e1 respectively
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

            const overlap = {
                x: Tools.overlap([box0.left, box0.right], [box1.left, box1.right]),
                y: Tools.overlap([box0.top, box0.bottom], [box1.top, box1.bottom])
            };

            //There must be overlap in both x and y
            if (overlap.x && overlap.y) {
                //If e0 is moving right and down relative to e1, it must be its right or bottom side that's colliding, etc. edges0 and edges1 will represent the edges of e0 and e1 respectively that might be colliding with the other.
                let edges0 = createVector(
                    relVel.x > 0 ? box0.right : box0.left,
                    relVel.y >= 0 ? box0.bottom : box0.top
                );
                let edges1 = createVector(
                    relVel.x > 0 ? box1.left : box1.right,
                    relVel.y >= 0 ? box1.top : box1.bottom
                );

                //backtrackFactor represents how much to reverse relative to the relative velocity.
                let backtrackFactor = p5.Vector.sub(edges0, edges1);
                backtrackFactor.x /= relVel.x;
                backtrackFactor.y /= relVel.y;
                //The direction where e0 "feels" the collision.
                let direction0 = 'none';
                //Two candidates for direction0.
                let xDir0 = relVel.x > 0 ? 'right' : 'left';
                let yDir0 = relVel.y >= 0 ? 'bottom' : 'top';
                //Make sure both entities allow collisions in the directions we're looking for.
                let collidable = { x: true, y: true };
                if (e0 instanceof Block && e0?.collisionSides !== undefined) {
                    collidable.x = e0.collisionSides[xDir0 === 'left' ? 'left' : 'right'];
                    collidable.y = e0.collisionSides[yDir0 === 'bottom' ? 'bottom' : 'top'];
                }
                if (e1 instanceof Block && e1?.collisionSides !== undefined) {
                    collidable.x &&= e1.collisionSides[xDir0 === 'left' ? 'right' : 'left'];
                    collidable.y &&= e1.collisionSides[yDir0 === 'bottom' ? 'top' : 'bottom'];
                }
                //Infinity represents impossibility since infinite backtracking will never be allowed.
                if (!collidable.x) backtrackFactor.x = Infinity;
                if (!collidable.y) backtrackFactor.y = Infinity;

                //If x requires less backtracking than y and this won't reverse far beyond previous frame: go for x. Otherwise, similar conditions for y. If neither is applicable, direction0 will remain 'none', indicating that there's no obvious direction to the collision.
                if (abs(backtrackFactor.x) < min(abs(backtrackFactor.y), 1.1)
                ) {
                    direction0 = xDir0;
                } else if (abs(backtrackFactor.y) < 1.1) {
                    direction0 = yDir0;
                }
                e0.handleCollision(e1, direction0);

                //If e0 "feels" the collision to the left, e1 must feel it to the right etc.
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