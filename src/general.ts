interface Visual {
    update(): void;
    draw(): void;
}

class Vector {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}