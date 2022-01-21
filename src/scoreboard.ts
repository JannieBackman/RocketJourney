let score: number;
score = 0;
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
        fill(255);
        text('SCORE ' + score, 800, 25);
    }

    private showCurrentScore() {

    }

    private showBestScore() {

    }

    private filterBestScore() {

    }
}