/**
 * Interface for classes representing obstacle data
 * @interface
 */
interface ObstacleData {
    image: p5.Image[];
    hitBox: HitBox;
    width: number;
    height: number;
    speed: number;
}

/** Class representing 'isRunning' state */
class GameManager {
    public gameState: IGameState;
    public rocket: Rocket;
    public scoreBoard: ScoreBoard;
    public leaderBoard: LeaderBoard; 
    private obstacleData: ObstacleData[]
    public obstacles: Obstacle[]
    private timeCounter: number;
    private speedDuration: number;
    private gameOverAnimationTimer: number;
    private spawnTime: number;

    constructor(gameState: IGameState) {
        this.gameState = gameState;
        this.rocket = new Rocket(10, (height - 115) / 2, 115, 63, 8)
        this.scoreBoard = new ScoreBoard();
        this.leaderBoard = new LeaderBoard();
        this.timeCounter = 0;
        this.speedDuration = 0;
        this.gameOverAnimationTimer = 0;
        this.spawnTime = 1500;
        this.obstacles = [];
        this.obstacleData = [
            { image: images.jellyFish, width: 69, height: 42, speed: 3, hitBox: {x1: 0, y1: 3, width1: 69, height1: 35, x2: 0, y2: 3, width2: 69, height2: 35} },
            { image: images.alien, width: 39, height: 72, speed: 3, hitBox: {x1: 0, y1: 0, width1: 39, height1: 72, x2: 0, y2: 0, width2: 39, height2: 72} },
            { image: images.meteor, width: 216, height: 104, speed: 3, hitBox: {x1: 10, y1: 20, width1: 180, height1: 65, x2: 80, y2: 0, width2: 60, height2: 98} },
            { image: images.octopus, width: 66, height: 57, speed: 3, hitBox: {x1: 12, y1: 10, width1: 41, height1: 40, x2: -1, y2: -2, width2: 65, height2: 18} },
            { image: images.palien, width: 58, height: 62, speed: 3, hitBox: {x1: 0, y1: 20, width1: 58, height1: 26, x2: 10, y2: 1, width2: 40, height2: 62} },
            { image: images.saturn, width: 129, height: 81, speed: 3, hitBox: {x1: 30 , y1: 2, width1: 70, height1: 80 , x2: 0, y2: 30, width2: 125, height2: 20} },
            { image: images.star, width: 42, height: 42, speed: 3, hitBox: {x1: 1, y1: 15, width1: 42, height1: 25, x2: 15, y2: 5, width2: 10, height2: 20} },
            { image: images.planet, width: 58, height: 50, speed: 3, hitBox: {x1: 0, y1: 0, width1: 50, height1: 50, x2: 0, y2: 0, width2: 50, height2: 50} },
            { image: images.superman, width: 120, height: 62, speed: 3, hitBox: {x1: 0, y1: 40, width1: 120, height1: 22, x2: 25, y2: 5, width2: 70, height2: 57} },
        ]; 
        sound.bgm.setVolume(0.05);
        sound.bgm.loop();
        sound.bgmgameover.setVolume(0.05);
    }

    public update() {
        this.speedDuration += deltaTime;
        if (this.speedDuration >= 8000) {
            // decreasing the spawnTime so it shortens the time of the calling of createObstacls function
            this.spawnTime -= 100;
            // setting the lowest value of spawnTime to 300
            if (this.spawnTime < 300) {
                this.spawnTime = 300;
            }
            // for increasing the speed of obstacles that have been created 
            for (let i = 0; i < this.obstacles.length; i++) {
                this.obstacles[i].increaseSpeed();
                this.speedDuration = 0;
            }
            // for setting the same increased speed for obstacles that will be created
            for (let i = 0; i < this.obstacleData.length; i++) {
                this.obstacleData[i].speed += 1;
            }
        }

        if (this.rocket.x >= (width - this.rocket.width) / 3) {
            this.timeCounter += deltaTime;
            // if (this.timeCounter >= 1500)
                if (this.timeCounter >= this.spawnTime) {
                this.createObstacle();
                this.timeCounter = 0;
            }
        }

        this.rocket.update();
        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].update();
        }
}

    public draw() {
        this.rocket.draw();
        for (let i = 0; i < this.obstacles.length; i++) {   
            this.obstacles[i].draw();
            this.obstacles[i].obstacleIsBehindRocket(this.rocket, this.scoreBoard);
        }
        this.scoreBoard.draw();
        this.checkCollision();
    }

    /** Create obstacles with random position */
    private createObstacle() {
        const obstacleData = random(this.obstacleData);
        let yPos = random(-10, height - obstacleData.height + 10);
        let xPos = width;
        this.obstacles.push(new Obstacle(obstacleData.image, obstacleData.hitBox, xPos, yPos, obstacleData.width, obstacleData.height, obstacleData.speed));
    }

    /** Runs hit tests to track a collision */
    private checkCollision() {
        for (let i = 0; i < this.obstacles.length; i++) {
            let obstacle = this.obstacles[i];
            
            // rocket red box
            const rocketTopLeftX1 = this.rocket.x + this.rocket.hitBox.x1;
            const rocketTopLeftY1 = this.rocket.y + this.rocket.hitBox.y1;

            // rocket yellow box
            const rocketTopLeftX2 = this.rocket.x + this.rocket.hitBox.x2;
            const rocketTopLeftY2 = this.rocket.y + this.rocket.hitBox.y2;

            // obstacle red box
            const obstacleTopLeftX1 = obstacle.x + obstacle.hitBox.x1;
            const obstacleTopLeftY1 = obstacle.y + obstacle.hitBox.y1;

            // obstacle yelllow box
            const obstacleTopLeftX2 = obstacle.x + obstacle.hitBox.x2;
            const obstacleTopLeftY2 = obstacle.y + obstacle.hitBox.y2;

            // rocket red box 1 + obstacle red box 1
            const hitTest1 = (rocketTopLeftX1 < obstacleTopLeftX1 + obstacle.hitBox.width1) &&
                            (rocketTopLeftX1 + this.rocket.hitBox.width1 > obstacleTopLeftX1) &&
                            (rocketTopLeftY1 < obstacleTopLeftY1 + obstacle.hitBox.height1) &&
                            (rocketTopLeftY1 + this.rocket.hitBox.height1 > obstacleTopLeftY1)
                                  
            // rocket red box 1 + obstacle yellow box  2
            const hitTest2 = (rocketTopLeftX1 < obstacleTopLeftX2 + obstacle.hitBox.width2) &&
                               (rocketTopLeftX1 + this.rocket.hitBox.width1 > obstacleTopLeftX2) &&
                               (rocketTopLeftY1 < obstacleTopLeftY2 + obstacle.hitBox.height2) &&
                               (rocketTopLeftY1 + this.rocket.hitBox.height1 > obstacleTopLeftY2)
            
            // rocket yellow box 2 + obstacle red box 1
            const hitTest3 = (rocketTopLeftX2 < obstacleTopLeftX1 + obstacle.hitBox.width1) &&
                            (rocketTopLeftX2 + this.rocket.hitBox.width2 > obstacleTopLeftX1) &&
                            (rocketTopLeftY2 < obstacleTopLeftY1 + obstacle.hitBox.height1) &&
                            (rocketTopLeftY2 + this.rocket.hitBox.height2 > obstacleTopLeftY1)

            // rocket red box 2 + obstacle yellow box 2
            const hitTest4 = (rocketTopLeftX2 < obstacleTopLeftX2 + obstacle.hitBox.width2) &&
                            (rocketTopLeftX2 + this.rocket.hitBox.width2 > obstacleTopLeftX2) &&
                            (rocketTopLeftY2 < obstacleTopLeftY2 + obstacle.hitBox.height2) &&
                            (rocketTopLeftY2 + this.rocket.hitBox.height2 > obstacleTopLeftY2)

            if (hitTest1 || hitTest2 || hitTest3 || hitTest4 ) {
                game.isHit = true;
                if (game.isHit) {
                    sound.bgm.stop();
                    this.obstacles = [obstacle];
                    this.scoreBoard.save();
                    this.showExplosion();
                } 
            }
        }
    }

    /** Shows explosion effect */
    private showExplosion() {
        image(images.explosion, this.rocket.x+(this.rocket.width/2), this.rocket.y, 80, 70);
        this.gameOverAnimationTimer += deltaTime;   
        if (this.gameOverAnimationTimer <= 100) {
            sound.collision.play(); 
        } else if ((this.gameOverAnimationTimer > 100 && this.gameOverAnimationTimer < 1000) || (this.gameOverAnimationTimer > 1500 && this.gameOverAnimationTimer < 2000)) {
            filter(THRESHOLD, 0.2);
        } else if (this.gameOverAnimationTimer > 3000) {
            this.gameOverAnimationTimer = 0;
            sound.gameover.play();
            this.gameState.setGameOver();
            sound.bgmgameover.play();
        }
    }
}