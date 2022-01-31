class ScoreBoard {
    public score: number;
    private scoreArray: number[];
    private textBlinkTimer: number;

    constructor() {
        this.score = 0;
        textFont(font);
        this.scoreArray = JSON.parse(localStorage.highscore || "[]");
        this.textBlinkTimer = 0;
    }

    public save() {
        this.scoreArray.push(this.score);
        this.scoreArray = this.scoreArray.sort((a, b) => b - a).slice(0, 1);
        localStorage.highscore = JSON.stringify(this.scoreArray);
    }

    public draw() {
        this.showCurrentScore();
        if (game.isGameOver && this.score === Math.max(...this.scoreArray, 0)) {
            this.showHighScoreEffect();
        } else {
            this.showBestScore();
        }
    }

    private showCurrentScore() {
        push();
        textSize(20);
        fill(255);
        textAlign(RIGHT);
        text('SCORE ' + this.score, 800, 25);
        pop();
    }

    public showBestScore() {
        push();
        textSize(20);
        fill(255);
        textAlign(RIGHT);
        text('BEST ' + Math.max(...this.scoreArray, 0), 800, 50);
        pop();
    }

    private showHighScoreEffect() {
        push();
        this.textBlinkTimer += deltaTime;
        if (this.textBlinkTimer < 300) {
            fill(247, 197, 59); 
        } else {
            fill(255);
        } text('BEST ' + Math.max(...this.scoreArray, 0), 800, 50);
        if (this.textBlinkTimer >= 600) {
            this.textBlinkTimer = 0;
        }
        pop();
    }

    public addScoreForPassingObstacle() {
        this.score += 10;
    }
}