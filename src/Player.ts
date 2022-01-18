class Player extends Entity {
    
    draw(): void {
        background('red');
        rect(200, 200, 200, 200)
        fill('red')
        console.log('hejhej')
        
    }
}

const p = new Player([100],[100], 1, 1, 1)