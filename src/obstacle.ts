class Obstacle extends MovingObject {

  draw() {
        this.update();
        let i; 
        if (this.timeCounter < 500) {
            i = 0; 
        } else {
            i = 1;
        } image(this.images[i], this.x, this.y, this.width, this.height)
        if (this.timeCounter >= 1000) {
            this.timeCounter = 0;
        }

        this.fadeInObstacle();
    }
 
    fadeInObstacle() { 
        this.x = this.x - this.speed; 
    }
}