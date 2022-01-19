/// <reference path="iscene.ts" />

class StartMenu implements IScene {
    gameManager: GameManager;
    logoText?: AnimatedImage;
    startText?: AnimatedImage;
    upAndDown?: AnimatedImage;

	setup() {
		this.logoText = new AnimatedImage(images.logo, images.logo.width, images.logo.height);
		this.startText = new AnimatedImage(images.start, images.start.width, images.start.height);
		this.upAndDown = new AnimatedImage(images.upAndDown, images.upAndDown.width, images.upAndDown .height);
	}

    draw() {
        if (this.logoText === undefined || this.startText === undefined || this.upAndDown === undefined) {
            return;
        }

		this.logoText.draw(this.gameManager.window.x + this.gameManager.window.width / 2 - this.logoText.width / 2, this.gameManager.window.y + 150);
		this.startText.draw(this.gameManager.window.x + this.gameManager.window.width / 2 - this.startText.width / 2, this.gameManager.window.y + 245);
		this.upAndDown.draw(this.gameManager.window.x + this.gameManager.window.width / 2 - this.upAndDown.width / 2, this.gameManager.window.y + 375);
    }

    constructor(gameManager: GameManager) {
        this.gameManager = gameManager;
    }
}