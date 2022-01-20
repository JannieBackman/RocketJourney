/// <reference path="iscene.ts" />

class GameOverMenu implements IScene {
    gameManager: GameManager;
    gameOverText?: p5.Image;
    restartText?: p5.Image;
    quitText?: p5.Image;

    constructor(gameManager: GameManager) {
        this.gameManager = gameManager;
    }

    draw() {
        image(images.gameOver, this.gameManager.window.x + this.gameManager.window.width / 2 - images.gameOver.width / 2, this.gameManager.window.y + 175)
        image(images.restart, this.gameManager.window.x + this.gameManager.window.width / 2 - images.restart.width / 2, this.gameManager.window.y + 325)
        image(images.quit, this.gameManager.window.x + this.gameManager.window.width / 2 - images.quit.width / 2, this.gameManager.window.y + 375)

    }

}