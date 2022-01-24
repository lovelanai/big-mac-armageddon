/// <reference path ="AnimatedEntity.ts"/>






class Player extends AnimatedEntity {
    private timeToChangeFrame = 100;

    constructor() {
        super(createVector(1050,0), createVector(80,180), createVector(0, 5), createVector(0, 0.8), sequences.jumpRight[0], true, false)
        this.imageTransform = {
            sx:0,
            sy:0,
            dWidth:0,
            dHeight:0,
        }
    //image(this.fill, this.position.x, this.position.y, this.size.x, this.size.y, this.imageTransform.sx, this.imageTransform.sy, this.imageTransform.sWidth, this.imageTransform.sHeight)
    }

    public update(): void {
        super.update();

        this.timeToChangeFrame -= deltaTime;
        if (this.timeToChangeFrame < 0) {
            
            

            this.timeToChangeFrame = 100;
        }
    }


    jump(): void {
        if(this.isOnGround){
            this.velocity.y = -20;
        }
    }
}




