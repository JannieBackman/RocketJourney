
class Obstacle extends MovingObject {
    public isBehindRocket: Boolean;

    constructor(images: p5.Image[], x: number, y: number, width: number, height: number, speed: number, angle?: number) {
        const hitBox: HitBox = {
            x: 0,
            y: 0,
            width: width,
            height: height
        };
        super(images, x, y, width, height, speed, hitBox, angle);
        
        this.isBehindRocket = false;
    }

    public update() {
        super.update();
        this.fadeInObstacle();
    }

    protected fadeInObstacle() {
        this.x = this.x - this.speed;
    }

    public obstacleIsBehindRocket(rocket: Rocket, scoreBoard: ScoreBoard) {
        if (this.x + this.width <= rocket.x && this.isBehindRocket === false) {
            this.isBehindRocket = true;
            scoreBoard.addScoreForPassingObstacle();
        }
    }
}


