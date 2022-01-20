class StartMenu implements IScene {
    gameManager: GameManager;
    logo?: p5.Image;
    startText?: p5.Image;
    upAndDown?: p5.Image;
    textBlinkTimer: number;
    
    constructor(gameManager: GameManager) {
        this.gameManager = gameManager;
        this.textBlinkTimer = 0;
    }

    draw() {
        image(images.logo, this.gameManager.window.x + windowWidth / 2 - images.logo.width / 2, this.gameManager.window.y + 100)
        image(images.upAndDown, this.gameManager.window.x + windowWidth / 2 - images.upAndDown.width / 2, this.gameManager.window.y + 375)

        this.textBlinkTimer += deltaTime;
        let i; 
        if (this.textBlinkTimer < 300) {
            i = 0; 
        } else {
            i = 1;
        } image(images.start[i], (windowWidth - images.start[i].width) / 2, this.gameManager.window.y + 245, images.start[i].width, images.start[i].height)
        if (this.textBlinkTimer >= 600) {
            this.textBlinkTimer = 0;
        }
    }
}