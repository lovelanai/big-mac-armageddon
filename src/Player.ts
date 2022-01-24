/// <reference path ="AnimatedEntity.ts"/>






class Player extends AnimatedEntity {
    private timeToChangeFrame: number;
    private sequenceIndex: number;
    private activeSequence: p5.Image[];
    public isDead: boolean;
    constructor() {
        super(createVector(1050,0), createVector(80,160), createVector(0, 5), createVector(0, 0.8), sequences.jumpRight[0], true, false)
        this.imageTransform = {
            sx:0,
            sy:0,
            dWidth:0,
            dHeight:0,
        }
        this.timeToChangeFrame = 100;
        this.sequenceIndex = 0;
        this.activeSequence = sequences.walkLeft;
        this.isDead = false;
    //image(this.fill, this.position.x, this.position.y, this.size.x, this.size.y, this.imageTransform.sx, this.imageTransform.sy, this.imageTransform.sWidth, this.imageTransform.sHeight)
    }

    public update(): void {
       
        if (this.isDead){
            this.activeSequence = sequences.die;
            this.isSolid = false;
            this.acceleration.set(0, -0.09);
        }

        else if (!this.isOnGround){
            if (this.velocity.x <= 0){
            this.activeSequence = sequences.jumpLeft}
            else {this.activeSequence = sequences.jumpRight}
        }

        else if (keyIsDown(68)) {
            this.activeSequence = sequences.walkRight;
        }

        else if (keyIsDown(65)){
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


    jump(): void {
        if (this.isOnGround) {
            this.velocity.y = -20;
        }
    }
    setSpeed(speed: number): void {
        this.velocity.x = speed;
    }
}




