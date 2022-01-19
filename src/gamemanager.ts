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

    backgroundImage?: AnimatedImage;

    startMenuScene: IScene = new StartMenu(this);
    gameScene: Game = new Game(this);
    gameOverScene: IScene = new GameOverMenu(this);
    scene: IScene = this.startMenuScene;

	movingObjects: MovingObject[] = [];

	/*
	function createMovingObject(frames: p5.Image[] | p5.Image, width: number, height: number, interval?: number) {
		
	}
	*/

    setScene(scene: IScene) {
        this.scene = scene;
		if(this.scene.setup !== undefined) {
			this.scene.setup();
		}
    }

    setup() {
		this.backgroundImage = new AnimatedImage(images.background, this.window.width, this.window.height, 250);
		this.scene.setup();
    }

    draw() {
        background('rgb(0, 4, 10)');

        this.backgroundImage?.draw(this.window.x, this.window.y);
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
        if (keyIsDown(ESCAPE)) {
            this.setScene(this.startMenuScene);
        }
    }   
} 

