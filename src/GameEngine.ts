class GameEngine implements Visual {
    livesNumber: number;
    entities: Set<Entity>;
    speed = 0;
    player: Player;

    constructor(livesNumber: number) {
        this.livesNumber = livesNumber;
        this.entities = new Set<Entity>();
        this.entities.add(new Entity(new p5.Vector(100, 600), new p5.Vector(1000, 50), 'green', true, false));
        this.entities.add(new AnimatedEntity(new p5.Vector(1060, -300), new p5.Vector(100, 50), new p5.Vector(0, 16), new p5.Vector(0, .8), 'blue', true, false));
        this.entities.add(new Enemy(new p5.Vector(100, 0), "horizontal"));
        this.player = new Player();
        this.entities.add(this.player);
    }

    update(): void {
        for (const e of this.entities) {
            e.update();
        }
        this.detectCollisions();
        if (keyIsPressed) {
            switch (keyCode) {
                case 65: //A
                    this.speed -= Math.random();
                    break;
                case 76://L
                    this.speed += Math.random();
                    break;
                case 71://G
                    this.player.jump();
                    break;
                default:
                    this.die();
            }
        }
        this.walk();
    }
    draw(): void {
        for (const e of this.entities) {
            e.draw();
        }
    }
    walk(): void {
        for (const e of this.entities) {
            if (e !== this.player) {
                e.position.x += this.speed;
            }
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


                const overlap0: Overlap = {
                    left: Tools.isBetween(box0.left, box1.left, box1.right) ? box1.right - box0.left : Infinity,
                    right: Tools.isBetween(box0.right, box1.left, box1.right) ? box0.right - box1.left : Infinity,
                    top: Tools.isBetween(box0.top, box1.top, box1.bottom) ? box0.top - box1.bottom : Infinity,
                    bottom: Tools.isBetween(box0.bottom, box1.top, box1.bottom) ? box1.top - box0.bottom : Infinity
                }

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

                if (minOverlap < Infinity) {
                    e0.handleCollision(e1, direction0);
                    let direction1 = Tools.swap(direction0, 'left','right');
                    direction1 = Tools.swap(direction1,'top','bottom');
                    e1.handleCollision(e0, direction1);
                }

            }
        }
    }
}