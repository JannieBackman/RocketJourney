class ScoreBoard {
    private score: number;
    gameManager: GameManager;
    gameState: IGameState;

    constructor(gameManager: GameManager, gameState: IGameState) {
        this.score = 0;
        this.gameManager = gameManager;
        this.gameState = gameState;
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

     public showBestScore() {
        fill(255);
        text('BESTSCORE ' + this.score, 800, 50);
    if (this.gameState.isGameOver === true) { 
            let scoreArray = [];
            scoreArray.push(this.score);
            console.log(scoreArray)
        }
     };

    private filterBestScore() {
//sortera bestscore i lista
    }

    public addScoreForPassingObstacle() {
        this.score += 10;
    }
}