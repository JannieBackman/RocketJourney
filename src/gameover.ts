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
        image(images.gameOver, (windowWidth - images.gameOver.width) / 2, windowHeight + 175)
        image(images.quit, windowWidth / 2 - images.quit.width / 2, windowHeight + 375)

        this.textBlinkTimer += deltaTime;
        let i; 
        if (this.textBlinkTimer < 300) {
            i = 0; 
        } else {
            i = 1;
        } image(images.restart[i], (windowWidth - images.start[i].width) / 2, windowHeight + 245, images.start[i].width, images.start[i].height)
        if (this.textBlinkTimer >= 600) {
            this.textBlinkTimer = 0;
        }
    }
}