class GameOverMenu {
    private textBlinkTimer: number;
    public gameManager: GameManager;
    private input: p5.Element; 

    constructor(gameManager: GameManager) {
        this.textBlinkTimer = 0;
        this.gameManager = gameManager;       
        this.input = createInput('YOUR NAME', 'text');
        this.input.style('display', 'none');
        this.input.position( width / 2, height / 2);  // not correct
        this.input.addClass('input');
        // this.input.show();
}

    saveUserDetail() {
        const name = this.input.value().toString();
        const score = this.gameManager.scoreBoard.score;
        this.gameManager.leaderBoard.leaderBoardArray.push({name: name, score: score})
    }
    
    showInputField() {
        if (game.isGameOver) {
            this.input.show()
        } else {
            this.input.hide();
        }
    }
 
    draw() {
        this.gameManager.scoreBoard.draw()
        
        textSize(55);
        textAlign(CENTER);
        fill(255);
        text('GAME OVER', 405, 255);
        fill(100,74,163);
        text('GAME OVER', 400, 250);

        textSize(14);
        fill(100);
        text('SUBMIT YOUR SCORE', 400, 450);
        fill(255);
        text('PRESS CTRL TO LEADERBOARD', 400, 550)

        this.textBlinkTimer += deltaTime;
        if (this.textBlinkTimer < 300) {
            fill(255); 
        } else {
            fill(150);
        } text('PRESS ESC TO RESTART', 400, 290)
        if (this.textBlinkTimer >= 600) {
            this.textBlinkTimer = 0;
        }
    } 
}