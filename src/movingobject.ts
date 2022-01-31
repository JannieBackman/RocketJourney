interface HitBox {
    x1: number;
    y1: number;
    width1: number;
    height1: number;
    x2: number; 
    y2: number; 
    width2: number;
    height2: number;
}

class MovingObject {
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    protected speed: number;
    protected animationTimeCounter: number;
    protected images: p5.Image[] = [];
    public hitBox: HitBox;

    constructor(images: p5.Image[], x: number, y: number, width: number, height: number, speed: number, hitBox: HitBox) {
        this.images = images;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.hitBox = hitBox;
        this.animationTimeCounter = 0;
    }

    public update() {
        this.animationTimeCounter += deltaTime;
    }

    public increaseSpeed() {
        this.speed += 1;
    }

    public draw() {
        let i;
        if (this.animationTimeCounter < 500) {
            i = 0;
        } else {
            i = 1;
        }
        image(this.images[i], this.x, this.y, this.width, this.height)
        if (this.animationTimeCounter >= 1000) {
            this.animationTimeCounter = 0;
        }
        // this.drawHitBox();
    }

    private drawHitBox() {
        push();
        stroke('red');
        noFill();
        const x = this.x + this.hitBox.x1;
        const y = this.y + this.hitBox.y1;
        rect(x, y, this.hitBox.width1, this.hitBox.height1)
        stroke('yellow');
        const x2 = this.x + this.hitBox.x2;
        const y2 = this.y + this.hitBox.y2;
        rect(x2, y2, this.hitBox.width2, this.hitBox.height2)
        pop();
    }

}