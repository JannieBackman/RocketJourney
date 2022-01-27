class ScoreBoard {
    private score: number;
    private scoreArray: number[];

    constructor() {
        this.score = 0;
        textFont(font);
        textSize(20);
        this.scoreArray = JSON.parse(localStorage.highscore || "[]");
    }

    public save() {
        this.scoreArray.push(this.score);
        this.scoreArray = this.scoreArray.sort((a, b) => b - a).slice(0, 5);
        localStorage.highscore = JSON.stringify(this.scoreArray);
    }

    public draw() {
        this.showCurrentScore();
        this.showBestScore();
    }

    private showCurrentScore() {
        fill(255);
        textAlign(RIGHT);
        text('SCORE ' + this.score, 800, 25);
    }

    public showBestScore() {
        fill(255);
        textAlign(RIGHT);
        text('BEST ' + Math.max(...this.scoreArray, 0), 800, 50);
    }

    public addScoreForPassingObstacle() {
        this.score += 10;
    }
}