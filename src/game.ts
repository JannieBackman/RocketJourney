/// <reference path="iscene.ts" />
class Game {
    private gameManager: GameManager;
    private startMenuScene: IScene;
    private gameOverScene: IScene;
    private scoreBoardScene: IScene;
    private scene: IScene;
    private backgroundImageTimeCounter: number;

    constructor() {
        this.gameManager = new GameManager();
        this.startMenuScene = new StartMenu(this);
        this.gameOverScene = new GameOverMenu(this);
        this.scoreBoardScene = new ScoreBoard(this);
        this.scene = this.startMenuScene;

        this.backgroundImageTimeCounter = 0;
    }
    
    private keyPressed() {
        if (keyCode === 32) {
            this.setScene(this.gameScene);
        } console.log(keyCode)
        //* Endast så att vi kan se hur GameOver sidan ser ut just nu *//
        if (keyIsDown(ENTER)) {
            this.setScene(this.gameOverScene);
        }
        // Så man kan se scoreboard-sidan
        if (keyIsDown(BACKSPACE)) {
            this.setScene(this.scoreBoardScene);
        }
        if (keyCode === ESCAPE) {

            this.setScene(this.startMenuScene);

        }
    }

	public update() {
        this.gameManager.update();
	}

    public draw() {
        background('rgb(0, 4, 10)');

        // added all these lines below (46-58)
        this.backgroundImageTimeCounter += deltaTime;
        let i; 
        if (this.backgroundImageTimeCounter < 300) {
            i = 2; 
        } else if (this.backgroundImageTimeCounter < 600) {
            i = 0;
        } else {
            i = 1;
        } image(images.background[i], 0, 0, width, height)
        if (this.backgroundImageTimeCounter >= 900) {
            this.backgroundImageTimeCounter = 0;
        }
        this.gameManager.draw();
    }
}