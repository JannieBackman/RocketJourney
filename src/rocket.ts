class Rocket extends MovingObject {

    display(scale: number) {
        // deltaTime is a p5 variable telling how long this function was called the last time. 
        // The timeCounter was preset to 0 and will count to 500ms based on the deltaTime
        this.timeCounter += deltaTime;

        // this if statement is counting how long a pic is shown which is 500ms
        if (this.timeCounter < 500) {
            // this.x and this.y should pass in so the rocket becomes moveable 
            image(rocketImgOne, game.background.x + this.x * scale, game.background.y + this.y * scale, this.width * scale, this.height * scale);
        } else {
            image(rocketImgTwo, game.background.x + this.x * scale, game.background.y + this.y * scale, this.width * scale, this.height * scale);
        }
        if (this.timeCounter >= 1000) {
            this.timeCounter = 0;
        }

        if (keyIsDown(UP_ARROW)) {
            this.moveUp();
        } else if (keyIsDown(DOWN_ARROW)) {
            this.moveDown();
        }
    }
}