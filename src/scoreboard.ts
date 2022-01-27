class ScoreBoard {
    private score: number;
    private scoreArray: number[];

    constructor() {
        this.score = 0;
        textFont(font);
        textSize(20);
        textAlign(RIGHT);
        this.scoreArray = JSON.parse(localStorage.highscore || "[]");
    }

    public save() {

        // console.log('Current Score: ' + currentScore)
        // console.log('Score: ' + this.score)
        // min([2, 3, 4, 6]);
        this.scoreArray.push(this.score);
        localStorage.highscore = JSON.stringify(this.scoreArray);
    }

    public draw() {
        this.showCurrentScore();
        this.showBestScore();
    }

    private showCurrentScore() {
        fill(255);
        text('SCORE ' + this.score, 800, 25);
    }

    public showBestScore() {
        fill(255);
        text('BEST ' + Math.max(...this.scoreArray, 0), 800, 50);
    }

    private filterBestScore() {
    //sortera bestscore i lista
    }

    public addScoreForPassingObstacle() {
        this.score += 10;
    }
}

/*
1. push in the current score to the array 
2. compare it with the objects that are in the array
3. filter out the highest one 
4. show it under BEST
*/