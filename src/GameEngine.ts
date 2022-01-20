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
        this.entities.add(new Enemy(new p5.Vector(100,0), "horizontal"));
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
                    this.speed-=Math.random();
                    break;
                case 76://L
                    this.speed+=Math.random();
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
        alert('You died');
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


                const col0 = {
                    left: Tools.isBetween(box0.left, box1.left, box1.right),
                    right: Tools.isBetween(box0.right, box1.left, box1.right),
                    top: Tools.isBetween(box0.top, box1.top, box1.bottom),
                    bottom: Tools.isBetween(box0.bottom, box1.top, box1.bottom)
                }

                //If there's both horizontal and vertical overlap (Otherwise there's no intersection)
                if ((col0.left || col0.right) && (col0.top || col0.bottom)) {
                    const col1 = {
                        left: col0.right,
                        right: col0.left,
                        top: col0.bottom,
                        bottom: col0.top
                    }
                    e0.handleCollision(e1, col0);
                    e1.handleCollision(e0, col1);
                }

            }
        }
    }
}