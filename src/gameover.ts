class GameOverMenu {
    private textBlinkTimer: number;
    public gameManager: GameManager;
    private input: p5.Element; // not done
    private inputIsOpen: boolean;

    constructor(gameManager: GameManager) {
        this.textBlinkTimer = 0;
        this.gameManager = gameManager;
        this.inputIsOpen = true;
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

        ///// not done (line 30-40)
        if (this.inputIsOpen) {  
            console.log("input is open")
            this.input = createInput();
            this.input.position(400, 550);
            if (keyCode === ENTER) {
                // if (input.value == "") {
                // return false;
                console.log("hello world")
                console.log(this.input)
            }
        }this.inputIsOpen = false;
        
        
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