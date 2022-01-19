class MovingObject {
    gameManager: GameManager;
    // image: AnimatedImage;

    public x: number;
    public y: number;
    public width: number;
    public height: number;
    private speed: number;
    private angle: number;
    protected timeCounter: number;

    constructor(gameManager: GameManager, x: number, y: number, width: number, height: number, speed: number, angle?: number) {
    // constructor(gameManager: GameManager, image: AnimatedImage, x: number, y: number, width: number, height: number, speed: number, angle?: number) {
        this.gameManager = gameManager;
        // this.image = image;

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
		this.angle = angle ?? 0;
        this.timeCounter = 0;
    }

    draw() {
        // this.image.draw(this.x, this.y);
        this.timeCounter += deltaTime; 
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
  
    moveToStart() {
        this.x += this.speed * .5  ;
        if (this.x > this.gameManager.window.width - 600) {
            this.x = this.gameManager.window.width - 600 ;
        }
    }
}