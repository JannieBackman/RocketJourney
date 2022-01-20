/// <reference path="iscene.ts" />
/// <reference path="startmenu.ts" />
/// <reference path="game.ts" />
/// <reference path="gameover.ts" />

interface GameWindow {
    width: number;
    height: number;
    x: number;
    y: number;
}

class GameManager {
    window: GameWindow = { width: 800, height: 600, x: 0, y: 0 };

    backgroundImage?: p5.Image;      // changed this line
    backgroundImageTimeCounter: number;      // added this line

    startMenuScene: IScene = new StartMenu(this);
    gameScene: Game = new Game(this);
    gameOverScene: IScene = new GameOverMenu(this);
    scoreBoardScene: IScene = new ScoreBoard(this);
    scene: IScene = this.startMenuScene;

    movingObjects: MovingObject[] = [];

    constructor() {
        this.backgroundImageTimeCounter = 0;      // added constructor and this line
    }

    setScene(scene: IScene) {
        this.scene = scene;
        if (this.scene.setup !== undefined) {
            this.scene.setup();
        }
    }

    setup() {
        this.scene.setup();
    }

    draw() {
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
        } image(images.background[i], 0, 0, this.window.width, this.window.height)
        if (this.backgroundImageTimeCounter >= 900) {
            this.backgroundImageTimeCounter = 0;
        }
        
        this.scene.draw();
    }

    keyPressed() {
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
} 