/// <reference path ="AnimatedEntity.ts"/>


class Player extends AnimatedEntity {
    private timeToChangeFrame: number;
    private sequenceIndex: number;
    private activeSequence: p5.Image[];
    private _isDead: boolean;
    private _deathHeight: number;
    constructor() {
        // 11400
        super(createVector(1000, 0), createVector(40, 125), createVector(0, 5), createVector(0, 0.8), sequences.jumpRight[0], true, false)
        this.imageTransform = {
            sx: 0,
            sy: 0,
            dWidth: 0,
            dHeight: 0,
        }
        this.timeToChangeFrame = 100;
        this.sequenceIndex = 0;
        this.activeSequence = sequences.walkLeft;
        this._isDead = false;
        this._deathHeight = 0;
        //image(this.fill, this.position.x, this.position.y, this.size.x, this.size.y, this.imageTransform.sx, this.imageTransform.sy, this.imageTransform.sWidth, this.imageTransform.sHeight)
    }

    public get deathHeight() {
        return this._deathHeight;
    }

    public get isDead() {
        return this._isDead;
    }

    public set isDead(value: boolean) {
        if (value) {
            this.acceleration = createVector(0,0);
            this.velocity = createVector(0,0);
            this._deathHeight = this.position.y
        }
        this._isDead = value;
    }

    public update(): void {

        if (this.position.y >= height && !this.isDead){
            this.isDead = true;
            sound.backGroundMusic.stop();
            sound.deathSong.stop();
            sound.deathSong.play();
        }

        if (this.isDead) {
            this.activeSequence = sequences.die;
            this.isSolid = false;
            this.acceleration.set(0, -0.03);
            if (this.position.y <= -this.size.y) {
                game.setState(new GameOverMenu('Press enter to try again :('))
            }
        }

        else if (!this.isOnGround) {
            if (this.velocity.x <= 0) {
                this.activeSequence = sequences.jumpLeft
            }
            else { this.activeSequence = sequences.jumpRight }
        }

        else if (keyIsDown(68)) {
            this.activeSequence = sequences.walkRight;
        }

        else if (keyIsDown(65)) {
            this.activeSequence = sequences.walkLeft
            

        }

        else {
            this.activeSequence = sequences.idle;
        }

        this.timeToChangeFrame -= deltaTime;
        if (this.timeToChangeFrame < 0) {
            this.sequenceIndex++;

            if (this.sequenceIndex >= this.activeSequence.length) {
                this.sequenceIndex = 0;
            }

            this.fill = this.activeSequence[this.sequenceIndex];
            this.timeToChangeFrame = 100;
        }
        super.update();
    }
    handleCollision(entity: Entity, direction: string): void {
        if (entity.getDamage()) {
            console.log('You should be dead now');//this.isDead = true;
        }
        console.log(direction);
        super.handleCollision(entity, direction);
    }

    jump(): void {
        if (this.isOnGround) {
            this.velocity.y = -20.5;
            sound.jump.play(undefined, undefined, .3);
        }

    }
    setSpeed(speed: number): void {
        this.velocity.x = speed;
    }
}



