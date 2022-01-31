interface IGameState {
    setGameOver: () => void;
    isStartMenu: boolean;
    isRunning: boolean;
    isGameOver: boolean;
    isShowingLeaderBoard: boolean;
    isHit: boolean;
}

class Game implements IGameState {
    private gameManager: GameManager;
    private startMenuScene: StartMenu;
    private gameOverScene: GameOverMenu;
    private backgroundImageTimeCounter: number;
    public isStartMenu: boolean;
    public isRunning: boolean;
    public isGameOver: boolean;
    public isShowingLeaderBoard: boolean;
    public isHit: boolean;

    constructor() {
        this.gameManager = new GameManager(this);
        this.startMenuScene = new StartMenu();
        this.gameOverScene = new GameOverMenu(this.gameManager);
        this.backgroundImageTimeCounter = 0;
        this.isStartMenu = true;  
        this.isRunning = false;
        this.isGameOver = false;
        this.isShowingLeaderBoard = false; 
        this.isHit = false;

    }

    private keyPressed() {
        if (this.isStartMenu && keyIsDown(32)) {
            sound.gamestart.play();
            this.isRunning = true;
            this.isStartMenu = false;
        }

        if (this.isGameOver && keyIsDown(ESCAPE) || this.isShowingLeaderBoard && keyIsDown(ESCAPE)) {
            sound.bgmgameover.stop();
            this.isGameOver = false;
            this.isShowingLeaderBoard = false;
            this.isStartMenu = true;
            this.gameOverScene.showInputField();
            this.gameManager = new GameManager(this);
            this.gameOverScene = new GameOverMenu(this.gameManager);
        }

        if (this.isGameOver && keyIsDown(ENTER)) {
            if (this.gameOverScene.input.value() == "") {
                return false;
            }
            sound.bgmgameover.stop();
            this.isGameOver = false;
            this.isShowingLeaderBoard = true;
            this.gameOverScene.saveUserDetail();
            this.gameOverScene.showInputField();
        }

        if (this.isGameOver && keyIsDown(CONTROL)) {
            sound.bgmgameover.stop();
            this.isGameOver = false;
            this.isShowingLeaderBoard = true;
            this.gameOverScene.showInputField();
        }
    }

    public setGameOver() {
        this.isRunning = false;
        this.isGameOver = true;
        this.isHit = false;
        this.gameOverScene.showInputField();
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
        } else if (this.isShowingLeaderBoard) {
            this.gameManager.leaderBoard.draw();
        }
    }
}

