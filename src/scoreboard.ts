class ScoreBoard {
    gameManager: GameManager;

    constructor(gameManager: GameManager) {
        this.gameManager = gameManager;
        textFont(font);
        textSize(fontsize);
        textAlign(RIGHT, TOP);
    }

    draw() {
        this.printScore();
    }

    private printScore() {
        let score: Number;
        score = 9999999
        fill(255);
        text('SCORE ' + score, 790, 25);
    }
}