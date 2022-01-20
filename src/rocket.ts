class Rocket extends MovingObject {
    
    public draw() {
        this.update();
        this.moveToStart();
        
        let i; 
        if (this.animationTimeCounter < 500) {
            i = 0; 
        } else {
            i = 1;
        } image(this.images[i], this.x, this.y, this.width, this.height)
        if (this.animationTimeCounter >= 1000) {
            this.animationTimeCounter = 0;
        }

        if (keyIsDown(UP_ARROW)) {
            this.moveUp();
        } else if (keyIsDown(DOWN_ARROW)) {
            this.moveDown();
        } 
    } 
}