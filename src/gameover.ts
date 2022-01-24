class GameOverMenu {
    game: Game;
    gameOverText?: p5.Image;
    restartText?: p5.Image;
    quitText?: p5.Image;
    textBlinkTimer: number;

    constructor(game: Game) {
        this.game = game;
        this.textBlinkTimer = 0;
    }

    draw() {
        image(images.gameOver, (images.background[0].width / 20 - images.gameOver.width / 2), 200)
        image(images.quit, (images.background[0].width / 20 - images.quit.width / 2), 335)

        this.textBlinkTimer += deltaTime;
        let i;
        if (this.textBlinkTimer < 300) {
            i = 0;
        } else {
            i = 1;
        } image(images.restart[i], (images.background[0].width / 20 - images.restart[i].width / 2), 290)
        if (this.textBlinkTimer >= 600) {
            this.textBlinkTimer = 0;
        }
    }
}