class MovingObject {
    x: number;
    y: number;
    width: number;
    height: number;
    speed: number;
    timeCounter: number; 

    constructor(x: number, y: number, width: number, height: number, speed: number) {
        this.x = x; 
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.timeCounter = 0;
    }

    moveUp() {
        // this.y = this.y - this.speed;
        // let this.y = 0; let this.speed = 10; 0 = 0 - 10 
        this.y -= this.speed;
        if (this.y < 0) {
            this.y = 0;
        }
    }

    moveDown() {
        this.y += this.speed;
        if (this.y > game.background.height - this.height) {
            this.y = game.background.height - this.height;
        }
    }

    moveLeft() {
        this.x -= this.speed;
        if (this.x < 0) {
            this.x = 0;
        }
    }

    moveRight() {
        this.x += this.speed;
        if (this.x > game.background.width - this.width) {
            this.x = game.background.width - this.width;
        }
    }
}
