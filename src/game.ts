interface IGameState {
    setGameOver: () => void;
    isStartMenu: boolean;
    isRunning: boolean;
    isGameOver: boolean;
}

class Game implements IGameState {
    private gameManager: GameManager;
    private startMenuScene: StartMenu;
    private gameOverScene: GameOverMenu;
    private backgroundImageTimeCounter: number;
    public isStartMenu: boolean;
    public isRunning: boolean;
    public isGameOver: boolean;

    constructor() {
        this.gameManager = new GameManager(this);
        this.startMenuScene = new StartMenu();
        this.gameOverScene = new GameOverMenu(this.gameManager);
        this.backgroundImageTimeCounter = 0;
        this.isStartMenu = true;
        this.isRunning = false;
        this.isGameOver = false;
    }

    private keyPressed() {
        if (this.isStartMenu && keyCode === 32) {
            this.isRunning = true;
        }

        if (this.isGameOver && keyCode === 32) {  // not done
            this.isGameOver = false;
            this.isRunning = true;
        } else if (this.isGameOver && keyCode === ESCAPE) {
            this.isGameOver = false;
            this.isStartMenu = true;
            this.gameManager = new GameManager(this);
        }
    }

    public setGameOver() {
        this.isRunning = false;
        this.isGameOver = true;
        this.gameManager = new GameManager(this);
        
    }
    
    public update() {
        if (this.isRunning) {
            this.gameManager.update();
        }
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

        if (this.isGameOver) {
            this.gameOverScene.draw();
        } else if (this.isRunning) {
            this.gameManager.draw();
        } else if (this.isStartMenu) {
            this.startMenuScene.draw();
        }
    }
}

