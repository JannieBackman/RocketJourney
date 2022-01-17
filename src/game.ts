/// <reference path="iscene.ts" />

class Game implements IScene {
    gameManager: GameManager;

    get p5() {
        return this.gameManager.p5;
    }

    scale: number;
    rocket: Rocket;

    rocketSprite?: Sprite;

    constructor(gameManager: GameManager) {
        this.gameManager = gameManager;
        this.scale = 1;

        let rocketImgHeight: number = 180 * 0.35;
        let rocketImgWidth: number = 330 * 0.35;
        this.rocket = new Rocket(gameManager, this, 0, (this.gameManager.window.height - (rocketImgHeight * this.scale)) / 2, rocketImgWidth, rocketImgHeight, 5);
    }

    preload() {
        let rocketImages = [
            this.p5.loadImage('/assets/images/rocket-1.svg'),
            this.p5.loadImage('/assets/images/rocket-2.svg')
        ];

        this.rocketSprite = new Sprite(this.gameManager, rocketImages, 115, 63, 500);
    }

    render() {
        this.rocket.display(this.scale);
    }
}