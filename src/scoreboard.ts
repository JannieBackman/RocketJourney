class ScoreBoard implements IScene {
    gameManager: GameManager;
    scoreBoardImage?: p5.Image;

    constructor(gameManager: GameManager) {
        this.gameManager = gameManager;
    }
    
    draw() {
        image(images.scoreBoard, this.gameManager.window.x + windowWidth / 2 - images.scoreBoard.width / 2, this.gameManager.window.y + 75);
    }
}