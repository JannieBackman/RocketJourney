class StartMenu {
    logo?: p5.Image;
    upAndDown?: p5.Image;
    textBlinkTimer: number;
    
    constructor() {
        this.textBlinkTimer = 0;
    }

    draw() {
        image(images.logo, (images.background[0].width / 20 - images.logo.width / 2), 200)
        image(images.upAndDown, (images.background[0].width / 20 -  images.upAndDown.width / 2), 450)

        this.textBlinkTimer += deltaTime;
        textSize(18);
        if (this.textBlinkTimer < 300) {
            fill(255); 
        } else {
            fill(150);
        } text('PRESS SPACE TO START', 580, 290)
        if (this.textBlinkTimer >= 600) {
            this.textBlinkTimer = 0;
        }
    }
}