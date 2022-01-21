class StartMenu {
    game: Game;
    logo?: p5.Image;
    startText?: p5.Image;
    upAndDown?: p5.Image;
    textBlinkTimer: number;
    
    constructor(game: Game) {
        this.game = game;
        this.textBlinkTimer = 0;
    }

    draw() {
        console.log('called')
        image(images.logo, windowWidth / 2 - images.logo.width / 2, windowHeight / 2 + 100)
        image(images.upAndDown, windowWidth / 2 - images.upAndDown.width / 2, windowHeight + 375)

        this.textBlinkTimer += deltaTime;
        let i; 
        if (this.textBlinkTimer < 300) {
            i = 0; 
        } else {
            i = 1;
        } image(images.start[i], (windowWidth - images.start[i].width) / 2, windowHeight + 245, images.start[i].width, images.start[i].height)
        if (this.textBlinkTimer >= 600) {
            this.textBlinkTimer = 0;
        }
    }
}