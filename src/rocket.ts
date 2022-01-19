class Rocket extends MovingObject {
    display() {
        this.draw();

        if (keyIsDown(UP_ARROW)) {
            this.moveUp();
        } else if (keyIsDown(DOWN_ARROW)) {
            this.moveDown();
        }
    }
}