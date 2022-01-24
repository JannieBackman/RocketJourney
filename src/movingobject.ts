interface HitBox {
    x: number;
    y: number;
    width: number;
    height: number;
}

class MovingObject {
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    protected speed: number;
    protected angle: number;
    protected animationTimeCounter: number;
    protected images: p5.Image[] = [];
    protected hitBox: HitBox;

    constructor(images: p5.Image[], x: number, y: number, width: number, height: number, speed: number, hitBox: HitBox, angle?: number) {
        this.images = images;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.hitBox = hitBox;
        this.angle = angle ?? 0;
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
        
        this.drawHitBox();
    }

    private drawHitBox() {
        push();
        stroke('red');
        noFill();
        const x = this.x + this.hitBox.x;
        const y = this.y + this.hitBox.y;
        rect(x, y, this.hitBox.width, this.hitBox.height)
        pop();
    }

}