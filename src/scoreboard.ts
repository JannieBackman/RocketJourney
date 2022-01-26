class ScoreBoard {
    private score: number;

    constructor() {
        this.score = 0;
        textFont(font);
        textSize(20);
        textAlign(RIGHT);
    }

    draw() {
        this.printScore();
    }

    public printScore() {
        this.showCurrentScore();
        this.showBestScore();
    }

    private showCurrentScore() {
        fill(255);
        text('SCORE ' + this.score, 800, 25);
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
        this.score += 10;
    }
}