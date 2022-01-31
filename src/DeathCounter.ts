//Question: livesNumber in gameEngine necessary? GameEngine does not display lives on gameOverMenu

class DeathCounter implements Visual {
    livesNumber : number;
    constructor (livesNumber : number) {
        this.livesNumber = livesNumber
    }
    update(): void {}

    draw(): void {
        fill(241, 163, 10)
        textSize(100)
        textFont(fonts.mcLawsuit)
        text(`${this.livesNumber}`, 1150, 120)
    }
}