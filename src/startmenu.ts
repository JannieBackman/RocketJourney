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
        image(images.logo, (images.background[0].width / 20 - images.logo.width / 2), 200)
        image(images.upAndDown, (images.background[0].width / 20 -  images.upAndDown.width / 2), 450)

        this.textBlinkTimer += deltaTime;
        let i; 
        if (this.textBlinkTimer < 300) {
            i = 0; 
        } else {
            i = 1;
        } image(images.start[i], (images.background[0].width / 20 - images.start[i].width / 2), 290)
        if (this.textBlinkTimer >= 600) {
            this.textBlinkTimer = 0;
        }
    }
}