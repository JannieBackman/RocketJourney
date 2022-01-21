class ScoreBoard {
    gameManager: GameManager;
    scoreBoardImage?: p5.Image;

    constructor(gameManager: GameManager) {
        this.gameManager = gameManager;
    }
    
    draw() {
        image(images.scoreBoard, windowWidth / 2 - images.scoreBoard.width / 2, windowHeight + 75);
    }
}