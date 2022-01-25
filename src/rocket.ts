class Rocket extends MovingObject {

    constructor(x: number, y: number, width: number, height: number, speed: number, angle?: number) {
        const hitBox: HitBox = {
            x: width * .15,
            y: height * .25,
            width: width * .8,
            height: height * .5
        }
        
        super(images.rocket, x, y, width, height, speed, hitBox, angle);
    }

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

    public update() {
        super.update();
        this.moveToStart();
        
        if (keyIsDown(UP_ARROW)) {
            this.moveUp();
        } else if (keyIsDown(DOWN_ARROW)) {
            this.moveDown();
        }
    }
}