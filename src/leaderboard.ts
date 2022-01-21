class LeaderBoard {
    gameManager: GameManager;
    leaderBoard?: p5.Image;

    constructor(gameManager: GameManager) {
        this.gameManager = gameManager;
    }

    draw() {
        image(images.leaderBoard, (images.background[0].width / 20 - images.leaderBoard.width / 2), (images.background[0].height / 20 - images.leaderBoard.height / 2),);
    }
}