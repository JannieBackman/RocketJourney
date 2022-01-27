interface IGameState {
    setGameOver: () => void;
    isStartMenu: boolean;
    isRunning: boolean;
    isGameOver: boolean;
    isScoreUpdated: boolean;
}

class Game implements IGameState {
    private gameManager: GameManager;
    private startMenuScene: StartMenu;
    private gameOverScene: GameOverMenu;
    private backgroundImageTimeCounter: number;
    public isStartMenu: boolean;
    public isRunning: boolean;
    public isGameOver: boolean;
    public isScoreUpdated: boolean;

    constructor() {
        this.gameManager = new GameManager(this);
        this.startMenuScene = new StartMenu();
        this.gameOverScene = new GameOverMenu(this.gameManager);
        this.backgroundImageTimeCounter = 0;
        this.isStartMenu = true;
        this.isRunning = false;
        this.isGameOver = false;
        this.isScoreUpdated = false;

    }
    private keyPressed() {
        if (this.isStartMenu && keyIsDown(32)) {
            sound.gamestart.play();
            this.isRunning = true;
        }

        if (this.isGameOver && keyIsDown(32)) {  // not done

            sound.gamestart.play();
            this.isGameOver = false;
            this.isRunning = true;
            this.gameManager = new GameManager(this);
            this.gameOverScene = new GameOverMenu(this.gameManager);

        } else if (this.isGameOver && keyCode === ESCAPE) {
            this.isGameOver = false;
            this.isStartMenu = true;
        }
    }

    public setGameOver() {
        this.isRunning = false;
        this.isGameOver = true;
    }

    public update() {
        if (this.isRunning) {
            this.gameManager.update();
        }
        this.keyPressed();
    }

    public draw() {
        background('rgb(0, 4, 10)');
        // console.log('isRunning: ' + this.isRunning, 'isGameOver: ' + this.isGameOver, 'startMenu ' + this.isStartMenu)

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

        if (this.isGameOver) {
            this.gameOverScene.draw();
        } else if (this.isRunning) {
            this.gameManager.draw();
            this.isStartMenu = false; // line added for sound play
        } else if (this.isStartMenu) {
            this.startMenuScene.draw();
        }
    }
}

