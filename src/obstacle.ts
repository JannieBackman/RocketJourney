class Obstacle extends MovingObject {

    public draw() {
        this.update();
        this.fadeInObstacle();

        let i; 
        if (this.animationTimeCounter < 500) {
            i = 0; 
        } else {
            i = 1;
        } image(this.images[i], this.x, this.y, this.width, this.height)
        if (this.animationTimeCounter >= 1000) {
            this.animationTimeCounter = 0;
        }
    }
 
    protected fadeInObstacle() { 
        this.x = this.x - this.speed; 
    }
}