class Obstacle extends MovingObject {
    public isBehindRocket: boolean;

constructor(images: p5.Image[], hitBox: HitBox, x: number, y: number, width: number, height: number, speed: number, angle?: number) {
        super(images, x, y, width, height, speed, hitBox, angle);
        this.isBehindRocket = false;
    }

    public update() {
        super.update();
        this.fadeInObstacle();
    }

    protected fadeInObstacle() {
        if (!game.isHit) {
            this.x = this.x - this.speed;
        }
    }

    public obstacleIsBehindRocket(rocket: Rocket, scoreBoard: ScoreBoard) {
        if (this.x + this.width <= rocket.x && this.isBehindRocket === false) {
            this.isBehindRocket = true;
            scoreBoard.addScoreForPassingObstacle();
        }
    }
}

// class Explosion extends MovingObject {
//     constructor(images: p5.Image[], x: number, y: number, width: number, height: number, speed: number, hitBox: HitBox, angle?: number) {

    
//     super(images: p5.Image[], x,y, width, height, speed, hitBox)
//     }
// }

