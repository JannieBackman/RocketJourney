class MovingObject {
    gameManager: GameManager;
    // image: AnimatedImage;

    protected x: number;
    protected y: number;
    protected width: number;
    protected height: number;
    protected speed: number;
    private angle: number;
    protected timeCounter: number;
    protected images: p5.Image[] = []; 

    constructor(gameManager: GameManager, images: p5.Image[], x: number, y: number, width: number, height: number, speed: number, angle?: number) {
        this.gameManager = gameManager;
        this.images = images; 
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
		this.angle = angle ?? 0;
        this.timeCounter = 0;
    }

    public update() {
        this.timeCounter += deltaTime; 
    }

    protected moveUp() {
        this.y -= this.speed;
        if (this.y < 0) {
            this.y = 0;
        }
    }

    protected moveDown() {
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
  
    protected moveToStart() {
        this.x += this.speed * .5  ;
        if (this.x > this.gameManager.window.width - 600) {
            this.x = this.gameManager.window.width - 600 ;
        }
    }
}