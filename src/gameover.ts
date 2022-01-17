/// <reference path="iscene.ts" />

class GameOverMenu implements IScene {

    gameManager: GameManager;

    get p5() {
        return this.gameManager.p5;
    }


    gameOverSprite?: Sprite;
    restartSprite?: Sprite; 
    quitSprite?: Sprite;
   


    preload() {
        let gameOverImage = this.p5.loadImage('/assets/images/game-over.svg', () => {
            this.gameOverSprite = new Sprite(this.gameManager, gameOverImage, gameOverImage.width, gameOverImage.height);
        });

        let restartImage = this.p5.loadImage('/assets/images/restart.svg',() => {
            this.restartSprite = new Sprite(this.gameManager, restartImage, restartImage.width, restartImage.height);
        });

        let quitImage = this.p5.loadImage('/assets/images/quit.svg',() => {
            this.quitSprite = new Sprite(this.gameManager, quitImage, quitImage.width, quitImage.height);
        });




    }

    render() {
        if (this.gameOverSprite === undefined) {
            return;
        }

        this.gameOverSprite.render(this.gameManager.window.x + this.gameManager.window.width / 2 - this.gameOverSprite.frames[0].width / 2, this.gameManager.window.y + 175);
        this.restartSprite?.render(this.gameManager.window.x + this.gameManager.window.width / 2 - this.restartSprite.frames[0].width / 2, this.gameManager.window.y + 325);
        this.quitSprite?.render(this.gameManager.window.x + this.gameManager.window.width / 2 - this.quitSprite.frames[0].width / 2, this.gameManager.window.y + 375);
        
        

    }

    constructor(gameManager: GameManager) {
        this.gameManager = gameManager;
    }
}