class ScoreBoard {
    gameManager: GameManager;

    constructor(gameManager: GameManager) {
        this.gameManager = gameManager;
        textFont(font);
        textSize(20);
        textAlign(RIGHT);
    }

    draw() {
        this.printScore();
    }

    private printScore() {
        let score: Number;
        score = 9999999
        fill(255);
        text('SCORE ' + score, 800, 25);
    }
}