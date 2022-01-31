class GameOverMenu {
    private textBlinkTimer: number;
    public gameManager: GameManager;
    public input: p5.Element; 

    constructor(gameManager: GameManager) {
        this.textBlinkTimer = 0;
        this.gameManager = gameManager;       
        this.input = createInput();
        this.input.style('display', 'none');
        this.input.elt.placeholder = 'YOUR NAME';
}

    saveUserDetail() {
        let leaderBoardArray = this.gameManager.leaderBoard.leaderBoardArray;
        const name = this.input.value().toString().toUpperCase();
        const score = this.gameManager.scoreBoard.score;
        leaderBoardArray.push({name: name, score: score})
        leaderBoardArray = leaderBoardArray.sort((a, b) => b.score - a.score); 
        localStorage.leaderboard = JSON.stringify(leaderBoardArray);
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

        push();
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
        pop();
    } 
}