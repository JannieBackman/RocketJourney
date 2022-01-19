/// <reference path="iscene.ts" />

class GameOverMenu implements IScene {
    gameManager: GameManager;
    gameOverText?: AnimatedImage;
    restartText?: AnimatedImage; 
    quitText?: AnimatedImage;

	setup() {
		this.gameOverText = new AnimatedImage(images.gameOver, images.gameOver.width, images.gameOver.height);
		this.restartText = new AnimatedImage(images.restart, images.restart.width, images.restart.height);
		this.quitText = new AnimatedImage(images.quit, images.quit.width, images.quit.height);
	}

    draw() {
        this.gameOverText?.draw(this.gameManager.window.x + this.gameManager.window.width / 2 - this.gameOverText.frames[0].width / 2, this.gameManager.window.y + 175);
        this.restartText?.draw(this.gameManager.window.x + this.gameManager.window.width / 2 - this.restartText.frames[0].width / 2, this.gameManager.window.y + 325);
        this.quitText?.draw(this.gameManager.window.x + this.gameManager.window.width / 2 - this.quitText.frames[0].width / 2, this.gameManager.window.y + 375);    
    }

    constructor(gameManager: GameManager) {
        this.gameManager = gameManager;
    }
}