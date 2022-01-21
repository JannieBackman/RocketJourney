class ScoreBoard {
    gameManager: GameManager;
    scoreBoardImage?: p5.Image;

    constructor(gameManager: GameManager) {
        this.gameManager = gameManager;
    }
    
    draw() {
        image(images.scoreBoard, (images.background[0].width / 20 - images.scoreBoard.width / 2), (images.background[0].height / 20 - images.scoreBoard.height / 2),);
    }
}