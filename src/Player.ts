/// <reference path ="AnimatedEntity.ts"/>


class Player extends AnimatedEntity {
    private timeToChangeFrame: number;
    private sequenceIndex: number;
    private activeSequence: p5.Image[];
    private isDead: boolean;
    private _deathHeight: number;
    constructor() {
        // 11400
        super(createVector(11400, 0), createVector(30, 125), createVector(0, 5), createVector(0, 0.8), sequences.jumpRight[0], true, false)

        this.imageTransform = {
            sx: 0,
            sy: 0,
            dWidth: 0,
            dHeight: 0,
        }
        this.timeToChangeFrame = 100;
        this.sequenceIndex = 0;
        this.activeSequence = sequences.walkLeft;
        this.isDead = false;
        this._deathHeight = 0;

    }

    public get deathHeight() {
        return this._deathHeight;
    }

    public getIsDead() {
        return this.isDead;
    }

    public die() {
        if (!this.getIsDead()) {
            nrOfLives--
            localStorage.setItem('lives', '' + nrOfLives)
            this.isDead = true;
            this.acceleration.set(0, -0.03);
            this.velocity = createVector(0, 0);
            this._deathHeight = this.position.y

            sound.backGroundMusic.stop();
            sound.deathSong.play();
            sound.deathSong.loop();
        }
    }

    public update(): void {

        if (this.position.y >= height && !this.getIsDead()) {
            this.die()
        }

        if (this.getIsDead()) {
            this.activeSequence = sequences.die;
            this.isSolid = false;
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

        else if (keyIsDown(68)) { // A
            this.activeSequence = sequences.walkRight;
        }

        else if (keyIsDown(65)) { // W
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
            this.die();
        }
        if(entity instanceof FinishBlock){
            game.setState(new WinMenu('Press Enter to play again? :)'))
        }
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



