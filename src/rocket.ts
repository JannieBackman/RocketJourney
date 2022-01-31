class Rocket extends MovingObject {

    constructor(x: number, y: number, width: number, height: number, speed: number) {
        let hitBox: HitBox = {
            x1: width * .15,
            y1: height * .25,
            width1: width * .8,
            height1: height * .5,

            x2: width * 0.3,
            y2: height * 0,
            width2: width * .19,
            height2: height * 1,
        }
        super(images.rocket, x, y, width, height, speed, hitBox);
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
        
        if (!game.isHit) {
            if (keyIsDown(UP_ARROW)) {
                this.moveUp();
            } else if (keyIsDown(DOWN_ARROW)) {
                this.moveDown();
            }
        }
    }
}