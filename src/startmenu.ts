/// <reference path="iscene.ts" />

class StartMenu implements IScene {
    gameManager: GameManager;
    logoText?: AnimatedImage;
    upAndDown?: AnimatedImage;
    startText?: p5.Image;
    textBlinkTimer: number;
    
    constructor(gameManager: GameManager) {
        this.gameManager = gameManager;
        this.textBlinkTimer = 0;
    }

	setup() {
		this.logoText = new AnimatedImage(images.logo, images.logo.width, images.logo.height);
		// this.startText = new AnimatedImage(images.start, images.start.width, images.start.height);
		this.upAndDown = new AnimatedImage(images.upAndDown, images.upAndDown.width, images.upAndDown .height);
	}

    draw() {
        if (this.logoText === undefined  || this.upAndDown === undefined) {
            return;
        }

		this.logoText.draw(this.gameManager.window.x + this.gameManager.window.width / 2 - this.logoText.width / 2, this.gameManager.window.y + 150);
		// this.startText.draw(this.gameManager.window.x + this.gameManager.window.width / 2 - this.startText.width / 2, this.gameManager.window.y + 245);
		this.upAndDown.draw(this.gameManager.window.x + this.gameManager.window.width / 2 - this.upAndDown.width / 2, this.gameManager.window.y + 375);
        // image(images.start[i], (this.gameManager.window.width - images.start[i].width) / 2, this.gameManager.window.y + 245, images.start[i].width, images.start[i].height)


        this.textBlinkTimer += deltaTime;
        let i; 
        if (this.textBlinkTimer < 300) {
            i = 0; 
        } else {
            i = 1;
        } image(images.start[i], (this.gameManager.window.width - images.start[i].width) / 2, this.gameManager.window.y + 245, images.start[i].width, images.start[i].height)
        if (this.textBlinkTimer >= 600) {
            this.textBlinkTimer = 0;
        }
    }
}