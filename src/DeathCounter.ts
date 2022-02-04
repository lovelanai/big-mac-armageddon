//Question: livesNumber in gameEngine necessary? GameEngine does not display lives on gameOverMenu

class DeathCounter implements Visual {
    private livesNumber : number;
    constructor (livesNumber : number) {
        this.livesNumber = livesNumber
    }
    update(): void {}

    draw(): void {
        textAlign(RIGHT)
        textSize(100)
        textFont(fonts.mcLawsuit)
        fill(184, 6, 0)
        text(`${this.livesNumber}`, 1240, 120)
        fill(241, 163, 10)
        text(`${this.livesNumber}`, 1235, 120)
    }
}