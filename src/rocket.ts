class Rocket extends MovingObject {

    display() {
        // (<Game>this.scene).rocketSprite?.render(this.gameManager.window.x + this.x, this.gameManager.window.y + this.y);

        if (keyIsDown(UP_ARROW)) {
            this.moveUp();
        } else if (keyIsDown(DOWN_ARROW)) {
            this.moveDown();
        }
    }
}