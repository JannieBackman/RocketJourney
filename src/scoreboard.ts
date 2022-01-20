/// <reference path="iscene.ts" />

class ScoreBoard implements IScene {
    gameManager: GameManager;
    scoreBoardImage?: p5.Image;

    constructor(gameManager: GameManager) {
        this.gameManager = gameManager;
    }

    draw() {
        image(images.scoreBoard, this.gameManager.window.x + this.gameManager.window.width / 2 - images.scoreBoard.width / 2, this.gameManager.window.y + 75)
    }
}