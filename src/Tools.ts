class Tools {
    static isBetween(value: number, min: number, max: number): boolean {
        return value >= min && value < max;
    }
    /** @returns true if intervals overlap, otherwise false */
    static overlap(interv0: [number, number], interv1: [number, number]): boolean {
        return this.isBetween(interv0[0], ...interv1) ||
            this.isBetween(interv0[1], ...interv1) ||
            this.isBetween(interv1[0], ...interv0) ||
            this.isBetween(interv1[1], ...interv0);
    }
    /** If value equals one of the matches, return the other, otherwise return value. */
    static swap(value: any, match0: any, match1: any): any {
        if (value === match0) return match1;
        if (value === match1) return match0;
        return value;
    }
    /**
     * Figures out which neighbors are not certain values.
     * @param grid 2d array in which to check neighbors.
     * @param index Position to check neighbors around.
     * @param nums If neighbor is a member of nums it is not free.
     * @returns Object representing which directions are free.
     */
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