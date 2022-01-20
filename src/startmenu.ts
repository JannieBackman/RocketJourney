/// <reference path="iscene.ts" />

class StartMenu implements IScene {
    gameManager: GameManager;
    logo?: p5.Image;
    startText?: p5.Image;
    upAndDown?: p5.Image;

    constructor(gameManager: GameManager) {
        this.gameManager = gameManager;
    }


    draw() {

        image(images.logo, this.gameManager.window.x + this.gameManager.window.width / 2 - images.logo.width / 2, this.gameManager.window.y + 100)
        image(images.start, this.gameManager.window.x + this.gameManager.window.width / 2 - images.start.width / 2, this.gameManager.window.y + 245)
        image(images.upAndDown, this.gameManager.window.x + this.gameManager.window.width / 2 - images.upAndDown.width / 2, this.gameManager.window.y + 375)

    }
}