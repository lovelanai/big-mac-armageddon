class Generator {
  private worldGrid: number[][];

  constructor() {

    // 1 = spik + deadly
    // 2 = spik + safe
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
    // 17 = checkpoint

    this.worldGrid = [

      [ 0, 0, 0 , 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 3 , 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0 , 0 , 0, 0, 0, 0 , 4 , 0 , 0 , 0 , 4 , 0 , 0 , 0 , 4 , 0 , 0, 0, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0 , 0, 0, 0, 0, 0, 0 , 0, 0, 0, 5, 0, 0, 0 , 0, 0, 0 , 0 , 0, 0, 5, 0, 0, 0, 0, 0 , 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 14,],
      [ 0, 0, 0 , 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0,17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0 , 0 , 0, 0, 0, 0 , 4 , 0 , 0 , 0 , 4 , 0 , 0 , 0 , 4 , 0 , 0, 0, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0 , 0, 0, 0, 0, 0, 0 , 0, 0, 0, 5, 0, 0, 0 , 0, 0, 0 , 0 , 0, 0, 5, 0, 0, 0, 0, 0 , 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 14,],
      [ 0, 0, 0 , 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 8 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0 , 0 , 0 , 0, 0, 0, 0 , 4 , 0 , 0 , 0 , 4 , 0 , 0 , 0 , 4 , 0 , 0, 0, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0 , 0, 0, 0, 0, 0, 0 , 0, 0, 0, 5, 0, 0, 0 , 0, 0, 0 , 0 , 0, 0, 5, 0, 0, 0, 0, 0 , 0 , 0, 0, 5, 0, 0, 0, 0, 0, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 14,],
      [ 0, 0, 0 , 0, 5, 0, 0, 4, 0, 0, 0, 0, 0, 11, 0, 0, 0, 8, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0 , 0 , 0, 0, 0, 0 , 4 , 0 , 0 , 0 , 4 , 0 , 0 , 0 , 4 , 0 , 0, 0, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 4, 0, 0, 0, 0, 0 , 0, 0, 0, 5, 0, 0, 0 , 0, 0, 0 , 0 , 0, 0, 5, 0, 0, 0, 0, 0 , 0 , 0, 0, 5, 0, 0, 0, 0, 0, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 14,],
      [ 0, 4, 4 , 4, 5, 0, 0, 0, 0, 4, 0, 4, 0, 11, 0, 0, 8, 0, 8, 0, 0, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 3, 3, 3, 3, 12,3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0 , 0 , 0 , 0, 0, 0, 3 , 3 , 12, 12, 12, 3 , 3 , 3 , 3 , 3 , 0 , 0, 0, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 4, 0, 0, 0, 4, 0 , 0, 0, 0, 5, 0, 0, 0 , 0, 3, 3 , 3 , 3, 0, 0, 0, 4, 4, 0, 0 , 0 , 0, 0, 5, 0, 0, 0, 0, 0, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 14,],
      [ 0, 0, 0 , 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 11, 0, 8, 0, 0, 0, 8, 0, 8 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 3, 0, 0, 0, 0, 0 , 0 , 0 , 0, 0, 0, 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 0 , 0, 0, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 0, 0 , 0, 0, 0 , 0 , 0, 0, 0, 0, 0, 0, 0, 0 , 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 14,],
      [ 0, 0, 0 , 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 7, 0, 0, 8, 0, 0, 0, 8, 0 , 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0 , 0 , 0 , 0, 0, 0, 7 , 7 , 7 , 13, 7 , 7 , 7 , 7 , 7 , 7 , 0 , 0, 0, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 3, 3, 3 , 0, 0, 3 , 0 , 0, 4, 4, 4, 0, 0, 0, 3 , 0 , 0, 0, 0, 6, 6, 6, 0, 0, 3 , 3 , 3 , 3 , 3 , 0 , 0 , 14,],
      [ 0, 0, 0 , 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 7 , 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 0, 5, 0, 0, 4, 4, 4, 0, 4, 4, 4, 4, 4, 5, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0 , 0 , 0 , 0, 0, 0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 0 , 0, 0, 0 , 0, 0, 3, 0, 0, 0, 6, 0, 0, 0, 12, 0, 0, 0, 3, 0, 0 , 0, 0, 0, 0, 0, 0 , 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0 , 11, 0, 0, 4, 0, 0, 0, 0, 0, 0 , 11, 11, 11, 11, 11, 0 , 0 , 14,],
      [ 0, 0, 15, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 7 , 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 9, 0, 9, 0, 0, 0, 9, 0, 0, 9, 0, 0, 9, 0, 0 , 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 9, 0, 0, 0, 5, 0, 3, 0, 0, 0 , 0 , 0 , 0, 0, 0, 7 , 7 , 7 , 13, 7 , 7 , 7 , 7 , 7 , 7 , 0 , 0, 0, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 0 , 0, 4, 0, 9, 0, 0, 0 , 9, 0, 7, 0 , 0, 0, 0, 0, 0, 0, 0, 11, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 11, 11, 11, 11, 11, 0 , 0 , 14,],
      [ 0, 0, 16, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 11, 0, 0, 0, 0, 0, 3, 0, 0 , 8, 0, 8, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3 , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0 , 0 , 0 , 0, 0, 0, 7 , 7 , 7 , 13, 7 , 7 , 7 , 7 , 7 , 7 , 0 , 0, 3, 1 , 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1 , 1, 1, 1, 1, 1, 3 , 0, 0, 0, 0, 0, 3, 0 , 0, 0, 7, 1 , 1, 1, 1, 1, 1, 1, 1, 11, 2 , 2, 2, 2, 2, 2, 2, 2, 2, 11, 11, 11, 11, 11, 0 , 0 , 14,],
      [ 3, 3, 3 , 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 11, 3, 3, 3, 3, 3, 11,3, 3 , 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 11,3, 3, 3, 3, 3, 3, 3, 3, 11, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 12, 12, 12, 3, 3, 3, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 3 , 3, 11, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 , 3, 3, 3, 3, 3, 11, 3, 3, 3, 3, 3, 11, 3, 3, 3, 11, 3, 3, 3, 3, 3, 3, 3, 3 , 11, 3, 3, 3, 3, 3, 3, 3, 3, 3 , 11, 11, 11, 11, 11, 12, 12, 3 ,],

    ];
  }

  public getWorldLength() {
    return this.worldGrid[0].length;
  }

  public getNextLevelEntities(): Set<Entity> {
    //1 kollar p?? v??r grid
    //2 och skapar alla entiter som beh??vs

    const entities = new Set<Entity>();
    const blockNums = new Set<number>([1, 3, 4, 5, 6, 11, 13]);

    for (let y in this.worldGrid) {
      for (let x in this.worldGrid[y]) {
        const index = createVector(parseInt(x), parseInt(y));
        const position = p5.Vector.mult(index, 80);

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

          case 4: //invis + solid + safe
            entities.add(new Block(position, 'invis', true, false, Tools.neighborsFree(this.worldGrid, index, blockNums)));
            break;

          case 5:
            entities.add(new Block(position, 'invis', true, true));
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
            entities.add(new MovingSpike(position, images.spikeVerticalBlock, false, true));
            break;

          case 15:
            entities.add(new FinishBlock(position, images.finalTopBlock, true, false));
            break;

          case 16:
            entities.add(new FinishBlock(position, images.finalBottomBlock, true, false));
            break;

          case 17:
            entities.add(new Block(position, images.checkPointBlock, false, true));
            break;
        }
      }
    }
    return entities;
  }

}

