interface Visual {
  update(): void;
  draw(): void;
}

interface Images {
  bkFries: p5.Image;
  bkHat: p5.Image;
  ballpit: p5.Image;
  gameBackground: p5.Image;
  ronaldMenu: p5.Image;
  ronaldDead: p5.Image;
  graveyard: p5.Image;
  hell: p5.Image;
  deathBalloon: p5.Image;
  bloodBackground: p5.Image;
  dirtBlock: p5.Image;
  grassBlock: p5.Image;
  invisBlock: p5.Image;
  spikeBlock: p5.Image;
  spikeVerticalBlock: p5.Image;
  finalTopBlock: p5.Image;
  finalBottomBlock: p5.Image;
  checkPointBlock: p5.Image;
  balloons: p5.Image;
  balloonbear: p5.Image;
  happyronald: p5.Image;
  happyronaldRight: p5.Image;
}

interface Sequences {
  idle: p5.Image[];
  walkLeft: p5.Image[];
  walkRight: p5.Image[];
  jumpLeft: p5.Image[];
  jumpRight: p5.Image[];
  die: p5.Image[];
}

interface Fonts {
  roboto: p5.Font;
  mcLawsuit: p5.Font;
  pressStart2p : p5.Font
}

interface sound {
  backGroundMusic: p5.SoundFile;
  jump: p5.SoundFile;
  deathSong: p5.SoundFile;
  winSong: p5.SoundFile;
}