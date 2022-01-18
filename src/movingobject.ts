class MovingObject {

    private x: number;
    private y: number;
    private width: number;
    private height: number;
    private speed: number;
    private frames: p5.Image[] = [];
    private interval?: number = undefined;
    private deltaTime: number = 0;
    private frameIndex: number = 0;




    constructor(x: number, y: number, width: number, height: number, speed: number) {

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        if (Array.isArray(frames)) {
            this.frames = frames;
        } else {
            this.frames.push(frames);
        }
        this.interval = interval;
    }

    moveUp() {
        this.y -= this.speed;
        if (this.y < 0) {
            this.y = 0;
        }
    }

    moveDown() {
        this.y += this.speed;
        if (this.y > this.game.window.height - this.height) {
            this.y = this.game.window.height - this.height;
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
        if (this.x > this.gameManager.window.width - this.width) {
            this.x = this.gameManager.window.width - this.width;
        }
    }

    fadeInObstacle() { 
        this.x = this.x - this.speed; 
    }

    animate() {
        if (this.interval !== undefined) {
            this.deltaTime += this.deltaTime;
            if (this.deltaTime > this.interval) {
                this.frameIndex = (this.frameIndex + 1) % this.frames.length;
                this.deltaTime = this.deltaTime - this.interval;
            }
        }
    }

    render(x: number, y: number) {
        this.animate();
        image(this.frames[this.frameIndex], x, y, this.width, this.height)
    }
}
