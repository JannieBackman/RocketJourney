let isStarMenu: Boolean;
let isRunning: Boolean;
let isGameOver: Boolean;

class Game {
    private gameManager: GameManager;
    private startMenuScene: StartMenu;
    private gameOverScene: GameOverMenu;
    //private scoreBoardScene: ScoreBoard;
    // public scene: XXXXXXX;
    private backgroundImageTimeCounter: number;

    constructor() {
        this.gameManager = new GameManager();
        this.startMenuScene = new StartMenu(this);
        this.gameOverScene = new GameOverMenu(this);
        //this.scoreBoardScene = new ScoreBoard(this.gameManager);
        // this.scene = this.startMenuScene;

        this.backgroundImageTimeCounter = 0;
    }

    private keyPressed() {
        if (keyCode === 32) {
            isRunning = true;
        }
    }
    //     } console.log(keyCode)
    //     //* Endast så att vi kan se hur GameOver sidan ser ut just nu *//
    //     if (keyIsDown(ENTER)) {
    //         this.setScene(this.gameOverScene);
    //     }
    //     // Så man kan se scoreboard-sidan
    //     if (keyIsDown(BACKSPACE)) {
    //         scoreBoardScene();
    //     }
    //     if (keyCode === ESCAPE) {
    //         startMenuScene();
    //     }
    // 

    public update() {
        this.gameManager.update();
        this.keyPressed();
    }

    public draw() {
        background('rgb(0, 4, 10)');

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

        if (isRunning) {
            this.gameManager.draw();
        } else if (isGameOver) {
            this.gameOverScene.draw();
        } else {
            this.startMenuScene.draw();
        }
    }
} 