class Game {
    scale: number;
    background: Background;
    rocket: Rocket;

    constructor() {
        this.scale = 1;
        // background
        this.background = new Background();
        // rocket 
        let rocketImgHeight: number = 180 * 0.35;
        let rocketImgWidth: number = 330 * 0.35;
        this.rocket = new Rocket(0, (this.background.height - (rocketImgHeight * this.scale))/2, rocketImgWidth, rocketImgHeight, 5);
    }

    draw() {
        this.background.display(this.scale);
        this.rocket.display(this.scale);
    }

    update() {

    }

    resize(width: number, height: number) {
        // this is set for scaling down all objects + background
        // "else" is necessary here even if the preset is 1 because the user may resize it back to normal 
        if (windowWidth <= 800) {
            this.scale = 0.8; // 80%
        } else {
            this.scale = 1; // 100% 
        }
        this.background.resize(width, height);
    }
}