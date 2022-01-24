let isStartMenu: Boolean;
let isRunning: Boolean;
let isGameOver: Boolean;

isStartMenu = true;
isRunning = false;
isGameOver = false;

class Game {
    private gameManager: GameManager;
    private startMenuScene: StartMenu;
    private gameOverScene: GameOverMenu;
    private backgroundImageTimeCounter: number;

    constructor() {
        this.gameManager = new GameManager();
        this.startMenuScene = new StartMenu(this);
        this.gameOverScene = new GameOverMenu(this);
        this.backgroundImageTimeCounter = 0;
        console.log(isStartMenu, isRunning, isGameOver)
    }

    private keyPressed() {
        if (keyCode === 32) {
            isRunning = true;
        }

        if (isGameOver && keyCode === 32) {
            isRunning = false;
            isGameOver = false;
            isStartMenu = true;
            console.log('isRunning: ' + isRunning + ' isGameOver: ' + isGameOver + ' isStartMenu: ' + isStartMenu)
        }
    }

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

        if (isGameOver) {
            this.gameOverScene.draw();
        } else if (isRunning) {
            this.gameManager.draw();
        } else if (isStartMenu) {
            this.startMenuScene.draw();
        }
    }
} 