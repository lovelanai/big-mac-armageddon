class GravityEntity extends AnimatedEntity{
    

    constructor(position: p5.Vector, bounds: p5.Vector, fill: p5.Image | string, isSolid: boolean, damage: boolean){
        super(position, bounds, fill, isSolid, damage);
    }
    update(): void {
        this.velocity.add(0,1);
    }
}