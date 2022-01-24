class Rocket extends MovingObject {

    protected moveUp() {
        this.y -= this.speed;
        if (this.y < 0) {
            this.y = 0;
        }
    }

    protected moveDown() {
        this.y += this.speed;
        if (this.y > height - this.height) {
            this.y = height - this.height;
        }
    }

    protected moveToStart() {
        this.x += this.speed * .5;
        if (this.x > (width - this.width) / 3) {
            this.x = (width - this.width) / 3;
        }
    }

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