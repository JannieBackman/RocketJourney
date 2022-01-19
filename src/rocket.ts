class Rocket extends MovingObject {
    display() {
        this.draw();
        this.moveToStart();
        
        let i; 
        if (this.timeCounter < 500) {
            i = 0; 
        } else {
            i = 1;
        } image(images.rocket[i], this.x, this.y, this.width, this.height)
        if (this.timeCounter >= 1000) {
            this.timeCounter = 0;
        }

        if (keyIsDown(UP_ARROW)) {
            this.moveUp();
        } else if (keyIsDown(DOWN_ARROW)) {
            this.moveDown();
        } else if (keyCode === 39) {
            this.moveRight(); 
         }    
        //  else if (keyCode === 37){
        //     this.moveLeft();
        // }
    } 
}