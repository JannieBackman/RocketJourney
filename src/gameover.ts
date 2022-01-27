class GameOverMenu {
    gameOverText?: p5.Image;
    restartText?: p5.Image;
    quitText?: p5.Image;
    textBlinkTimer: number;
    gameManager: GameManager;

    constructor(gameManager: GameManager) {
        this.textBlinkTimer = 0;
        this.gameManager = gameManager;
    }
 
    draw() {
        this.gameManager.scoreBoard.draw()
        
        textSize(55);
        textAlign(CENTER);
        fill(255);
        text('GAME OVER', 405, 255)
        fill(100,74,163);
        text('GAME OVER', 400, 250)        
        fill(255);
        textSize(18);
        text('ESC TO QUIT', 400, 335)
        
        this.textBlinkTimer += deltaTime;
        if (this.textBlinkTimer < 300) {
            fill(255); 
        } else {
            fill(150);
        } text('PRESS SPACE TO RESTART', 400, 290)
        if (this.textBlinkTimer >= 600) {
            this.textBlinkTimer = 0;
        }
    } 
}