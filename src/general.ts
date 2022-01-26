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
        return value >= min && value < max;
    }
    static overlap(interv0: [number, number], interv1: [number, number]): boolean {
        return false;
    }

    static swap(value: any, match0: any, match1: any): any {
        if (value === match0) return match1;
        if (value === match1) return match0;
        return value;
    }

    static neighborsFree(grid: number[][], index: p5.Vector, nums: Set<number>): { left: boolean, right: boolean, top: boolean, bottom: boolean } {
        const lastX = grid[index.y].length - 1;
        const lastY = grid.length - 1;
        return {
            left: !nums.has(grid[index.y][Math.max(index.x - 1, 0)]),
            right: !nums.has(grid[index.y][Math.min(index.x + 1, lastX)]),
            top: !nums.has(grid[Math.max(index.y - 1, 0)][index.x]),
            bottom: !nums.has(grid[Math.min(index.y + 1, lastY)][index.x])
        }
    }
}