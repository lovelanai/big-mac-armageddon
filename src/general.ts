interface Visual {
    update(): void;
    draw(): void;
}

class Border {
    p0: p5.Vector;
    p1: p5.Vector;
    constructor(p0: p5.Vector, p1: p5.Vector) {
        this.p0 = p0;
        this.p1 = p1;
    }
}


class Tools {

    static isBetween(value: number, min: number, max: number): boolean {
        return value > min && value < max;
    }

    static swap(value: any, match0: any, match1: any): any {
        if (value === match0) return match1;
        if (value === match1) return match0;
        return value;
    }
}