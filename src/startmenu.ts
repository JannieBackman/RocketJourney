class StartMenu {
    private textBlinkTimer: number;
    
    constructor() {
        this.textBlinkTimer = 0;
    }

    draw() {
        image(images.upAndDown, (images.background[0].width / 20 -  images.upAndDown.width / 2), 450)

        textSize(55);
        textAlign(CENTER);
        fill(255);
        text('ROCKET JOURNEY', 405, 255)
        fill(54,153,245);
        text('ROCKET JOURNEY', 400, 250)  

        this.textBlinkTimer += deltaTime;
        textSize(18);
        textAlign(CENTER);
        if (this.textBlinkTimer < 300) {
            fill(255); 
        } else {
            fill(150);
        } text('PRESS SPACE TO START', 400, 290)
        if (this.textBlinkTimer >= 600) {
            this.textBlinkTimer = 0;
        }
    }
}