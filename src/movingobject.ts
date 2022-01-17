class MovingObject {
    gameManager: GameManager;
    scene: IScene;

    get p5() {
        return this.gameManager.p5;
    }

    x: number;
    y: number;
    width: number;
    height: number;
    speed: number;

    constructor(gameManager: GameManager, scene: IScene, x: number, y: number, width: number, height: number, speed: number) {
        this.gameManager = gameManager;
        this.scene = scene;

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        // this.timeCounter = 0;
    }

    moveUp() {
        this.y -= this.speed;
        if (this.y < 0) {
            this.y = 0;
        }
    }

    moveDown() {
        this.y += this.speed;
        if (this.y > this.gameManager.window.height - this.height) {
            this.y = this.gameManager.window.height - this.height;
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
}
