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
        this.showCurrentScore();
        this.showBestScore();
    }

    private showCurrentScore() {
        fill(255);
        text('SCORE ' + score, 800, 25);
    }

    private showBestScore() {
        // if (isGameOver) { 
        // let scoreArray = [];
        // scoreArray.push(score);
        // console.log(scoreArray)
        // }
    }

    private filterBestScore() {

    }

    public addScoreForPassingObstacle() {
        score += 10;
    }
}