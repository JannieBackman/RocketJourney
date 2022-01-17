class Renderer {
    gameManager: GameManager;
    scene?: IScene;

    get p5() {
        return this.gameManager.p5;
    }

    constructor(gameManager: GameManager) {
        this.gameManager = gameManager;
    }

    setScene(scene: IScene) {
        this.scene = scene;
    }

    render() {
        if (this.gameManager.backgroundSprite === undefined) {
            return;
        }

        this.p5.background('rgb(0, 4, 10)');

        this.gameManager.backgroundSprite.render(this.gameManager.window.x, this.gameManager.window.y);

        if (this.scene !== undefined) {
            this.scene.render();
        }

    }
}