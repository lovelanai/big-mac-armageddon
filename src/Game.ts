

class Game implements Visual {
    private currentState: Visual;
    static height: number;
    constructor(startMenu: Visual) {
        this.currentState = startMenu;
    }
    update() {
        this.currentState.update();
        player.update();
        
    }
    draw() {
        this.currentState.draw();
    }
    setState(state: Visual) {
        this.currentState = state;
    }
}