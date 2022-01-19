/// <reference path="iscene.ts" />

class ScoreBoard implements IScene {
    gameManager: GameManager;
    scoreBoardImage?: AnimatedImage;
    

	setup() {
		this.scoreBoardImage = new AnimatedImage(images.scoreBoard, images.scoreBoard.width, images.scoreBoard.height);
	}

    draw() {
        this.scoreBoardImage?.draw(this.gameManager.window.x + this.gameManager.window.width / 2 - this.scoreBoardImage.frames[0].width / 2, this.gameManager.window.y + 75);
    }

    constructor(gameManager: GameManager) {
        this.gameManager = gameManager;
    }
}