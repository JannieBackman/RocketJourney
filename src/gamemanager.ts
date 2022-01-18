///// <reference path="iscene.ts" />

interface GameWindow {
    width: number;
    height: number;
    x: number;
    y: number;
}

class GameManager {
    // renderer: Renderer = new Renderer(this);
    // p5: p5;

    window: GameWindow = { width: 800, height: 600, x: 0, y: 0 };

    backgroundSprite?: Sprite;

    startMenuScene: IScene = new StartMenu(this);
    gameScene: Game = new Game(this);
    gameOverScene: IScene = new GameOverMenu(this);
    randomSprite: any;

    constructor() {
        this.p5 = new p5((p) => {
            p.preload = this.preload.bind(this);
            p.setup = this.setup.bind(this);
            p.draw = this.renderer.render.bind(this.renderer);
            p.keyPressed = this.keyPressed.bind(this);
        });
    }

    preload() {
        // let backgroundImages = [
        //     this.p5.loadImage('/assets/images/background-3.svg'),
        //     this.p5.loadImage('/assets/images/background-2.svg'),
        //     this.p5.loadImage('/assets/images/background-1.svg')
        // ];

        this.backgroundSprite = new Sprite(this, backgroundImages, this.window.width, this.window.height, 250);

        this.startMenuScene.preload();
        this.gameScene.preload();
        this.gameOverScene.preload();
    }

    setup() {
        this.p5.createCanvas(this.window.width, this.window.height);
        this.p5.frameRate(30);
        this.renderer.setScene(this.startMenuScene);
    }

    keyPressed() {
        if (this.p5.keyCode === 32) {
            this.renderer.setScene(this.gameScene);
        }
        //* Endast så att vi kan se hur GameOver sidan ser ut just nu *//
        if (this.p5.keyCode === 13) {
            this.renderer.setScene(this.gameOverScene);
        }
    }
}

