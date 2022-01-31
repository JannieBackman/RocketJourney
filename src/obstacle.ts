/** Class representing the obstacle in 'isRunning' state */
class Obstacle extends MovingObject {
    public isBehindRocket: boolean;

constructor(images: p5.Image[], hitBox: HitBox, x: number, y: number, width: number, height: number, speed: number) {
        super(images, x, y, width, height, speed, hitBox);
        this.isBehindRocket = false;
    }

    public update() {
        super.update();
        this.fadeInObstacle();
    }

    /** Moves obstalce from right to left */
    protected fadeInObstacle() {
        if (!game.isHit) {
            this.x = this.x - this.speed;
        }
    }

    /** Updates boolean based on the position of an obstacle  */
    public obstacleIsBehindRocket(rocket: Rocket, scoreBoard: ScoreBoard) {
        if (this.x + this.width <= rocket.x && this.isBehindRocket === false) {
            this.isBehindRocket = true;
            scoreBoard.addScoreForPassingObstacle();
        }
    }
}