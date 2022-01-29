class Generator {
  private worldGrid: number[][];

  constructor() {

    // 1 = spik + safe
    // 2 = spik + deadly
    // 3 = solid + safe + grass
    // 4 = invis + solid + safe
    // 5 = invis + deadly
    // 6 = visible + deadly
    // 7 = visible + safe + walk through + dirt
    // 8 = vertical enemy
    // 9 = hotizontal enemy
    // 10 = complete game block
    // 11 = solid + safe + dirt
    // 12 = grass + no hitbox
    // 13 = deadly + dirt
    // 14 = vertical spike + deadly
    // 15 = final top block
    // 16 = final bottom block

    this.worldGrid = [

      [ 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14,],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14,],
      [ 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 9, 0, 0, 9, 0, 0, 0, 0, 9, 0, 0, 0, 9, 0, 0, 0, 4, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14,],
      [ 0, 0, 0, 0, 5, 0, 0, 4, 0, 0, 0, 0, 0, 11, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14,],
      [ 0, 4, 4, 4, 5, 0, 0, 0, 0, 4, 0, 4, 0, 11, 0, 0, 8, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 12, 12, 12, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 5, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14,],
      [ 0, 0, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 11, 0, 8, 0, 0, 0, 8, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14,],
      [ 0, 0, 0, 0, 0, 5, 0, 0, 4, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 8, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 13, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 3, 0, 0, 4, 4, 4, 0, 0, 0, 3, 0, 0, 0, 0, 6, 6, 6, 0, 0, 3, 3, 3, 3, 3, 0, 0, 14,],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 6, 0, 0, 0, 12, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 4, 0, 0, 0, 0, 0, 0, 11, 11, 11, 11, 11, 0, 0, 14,],
      [ 0, 0, 15, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 5, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 13, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11, 11, 11, 11, 0, 0, 14,],
      [ 0, 0, 16, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 11, 9, 0, 0, 0, 0, 0, 0, 0, 8, 0, 8, 0, 0, 9, 0, 9, 0, 0, 0, 9, 0, 0, 9, 0, 0, 9, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 13, 7, 7, 7, 7, 7, 7, 0, 0, 3, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 9, 0, 3, 0, 9, 0, 11, 1, 1, 1, 1, 1, 1, 1, 1, 11, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 11, 11, 11, 11, 0, 0, 14,],
      [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 11, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 11, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 11, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 3, 3, 3, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 3, 3, 11, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 11, 3, 3, 3, 3, 3, 11, 3, 3, 3, 11, 3, 3, 3, 3, 3, 3, 3, 3, 11, 3, 3, 3, 3, 3, 3, 3, 3, 3, 11, 11, 11, 11, 11, 3, 3, 3,],

    ];
  }

  public getWorldLength() {
    const worldLength = this.worldGrid[0].length
    return worldLength
  }

  public getNextLevelEntities(): Set<Entity> {
    //1 kollar på vår grid
    //2 och skapar alla entiter som behövs

    const entities = new Set<Entity>();
    const blockNums = new Set<number>([3, 4, 5, 10]);

    for (let y in this.worldGrid) {
      for (let x in this.worldGrid[y]) {

        // x*50 = x
        // y*50 = y
        const index = createVector(parseInt(x), parseInt(y));


        const position = p5.Vector.mult(index, 80); //behöver fixas

        switch (this.worldGrid[y][x]) {
          case 1 /* new x(position, fill, isSolid, damage,) (SPIKE)*/:
            entities.add(new Spike(position, images.spikeBlock, true, true));
            break;

          case 2:
            entities.add(new Spike(position, images.spikeBlock, false, false));
            break;

          case 3:
            entities.add(new Block(position, images.grassBlock, true, false, Tools.neighborsFree(this.worldGrid, index, blockNums)));
            break;

          case 4:
            entities.add(new Block(position, images.invisBlock, true, false, Tools.neighborsFree(this.worldGrid, index, blockNums)));
            break;

          case 5:
            entities.add(new Block(position, images.invisBlock, true, true));
            break;

          case 6:
            entities.add(new Block(position, images.grassBlock, true, true));
            break;

          case 7:
            entities.add(new Block(position, images.dirtBlock, false, false));
            break;

          case 8: //posistion, direction
            entities.add(new Enemy(position, "vertical"));
            break;

          case 9:
            entities.add(new Enemy(position, "horizontal"));
            break;

          case 10:
            entities.add(new FinishBlock(position, "red", false, true));
            break;
          
          case 11:
            entities.add(new Block(position, images.dirtBlock, true, false, Tools.neighborsFree(this.worldGrid, index, blockNums)));
            break;
          
          case 12:
            entities.add(new Block(position, images.grassBlock, false, false));
            break;

          case 13:
            entities.add(new Block(position, images.dirtBlock, true, true));
            break;

          case 14: 
            entities.add(new Spike(position, images.spikeVerticalBlock, true, true));
            break;
            
          case 15:
            entities.add(new Block(position, images.finalTopBlock, true, false));
            break;

          case 16:
            entities.add(new Block(position, images.finalBottomBlock, true, false));
            break;
        }
      }
    }
    return entities;
  }

}


