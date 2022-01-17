/// <reference path="iscene.ts" />

class StartMenu implements IScene {
    gameManager: GameManager;

    get p5() {
        return this.gameManager.p5;
    }

    logoSprite?: Sprite;
    startText?: Sprite;
    upAndDown?: Sprite;

    preload() {
        let logoImage = this.p5.loadImage('/assets/images/Rocket-Journey.svg', () => {
            this.logoSprite = new Sprite(this.gameManager, logoImage, logoImage.width, logoImage.height);
        });

        let startTextImage = this.p5.loadImage('/assets/images/start-game.svg', () => {
            this.startText = new Sprite(this.gameManager, startTextImage, startTextImage.width, startTextImage.height);
        });

        let upAndDownImage = this.p5.loadImage('/assets/images/up-down.svg', () => {
            this.upAndDown = new Sprite(this.gameManager, upAndDownImage, upAndDownImage.width, upAndDownImage.height);
        });
    }

    render() {
        if (this.logoSprite === undefined || this.startText === undefined || this.upAndDown === undefined) {
            return;
        }

        this.logoSprite.render(this.gameManager.window.x + this.gameManager.window.width / 2 - this.logoSprite.frames[0].width / 2, this.gameManager.window.y + 150);
        this.startText.render(this.gameManager.window.x + this.gameManager.window.width / 2 - this.startText.frames[0].width / 2, this.gameManager.window.y + 245);
        this.upAndDown.render(this.gameManager.window.x + this.gameManager.window.width / 2 - this.upAndDown.frames[0].width / 2, this.gameManager.window.y + 375);
    }

    constructor(gameManager: GameManager) {
        this.gameManager = gameManager;
    }
}