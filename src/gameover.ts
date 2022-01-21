/// <reference path="iscene.ts" />

class GameOverMenu implements IScene {
    gameManager: GameManager;
    gameOverText?: p5.Image;
    restartText?: p5.Image;
    quitText?: p5.Image;
    textBlinkTimer: number;

    constructor(gameManager: GameManager) {
        this.gameManager = gameManager;
        this.textBlinkTimer = 0;
    }

    draw() {
        image(images.gameOver, this.gameManager.window.x + windowWidth / 2 - images.gameOver.width / 2, this.gameManager.window.y + 175)
        image(images.quit, this.gameManager.window.x + windowWidth / 2 - images.quit.width / 2, this.gameManager.window.y + 375)

        this.textBlinkTimer += deltaTime;
        let i; 
        if (this.textBlinkTimer < 300) {
            i = 0; 
        } else {
            i = 1;
        } image(images.restart[i], (windowWidth - images.start[i].width) / 2, this.gameManager.window.y + 245, images.start[i].width, images.start[i].height)
        if (this.textBlinkTimer >= 600) {
            this.textBlinkTimer = 0;
        }
    }
}