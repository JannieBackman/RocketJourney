class Obstacle extends MovingObject {
    constructor(gameManager: GameManager, image: AnimatedImage, x: number, y: number, speed: number, angle?: number) {
        super(gameManager, image, x, y, image.width, image.height, speed, angle);
    }

    draw() {
        this.image.draw(this.gameManager.window.x + this.x, this.gameManager.window.y + this.y);
        this.fadeInObstacle();
    }
 
    fadeInObstacle() { 
        // this.x = this.x - this.speed;
        this.x = this.x - 5;  // just for testing now, will be changed back to this.speed
    }
}