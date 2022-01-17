

class Game implements Visual {
    private currentState: Visual;
    constructor(startMenu: Visual) {
        this.currentState = startMenu;
    }
    update() {
        this.currentState.update();
    }
    draw() {
        this.currentState.draw();
    }
    setState(state: Visual) {
        this.currentState = state;
    }
}