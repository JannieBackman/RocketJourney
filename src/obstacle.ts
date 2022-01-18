class Obstacle extends MovingObject {

    private sprite: Sprite;

    constructor(gameManager: GameManager, scene: IScene, x: number, y: number, sprite: Sprite, speed: number) {
        super(gameManager, scene, x, y, sprite.width, sprite.height, speed);
        this.sprite = sprite;
    }

    display() {
        this.sprite.render(this.gameManager.window.x + this.x, this.gameManager.window.y + this.y);
    }
}