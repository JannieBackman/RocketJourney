// interface GameWindow {
//     width: number;
//     height: number;
//     x: number;
//     y: number;
// }
interface ObstacleData {
    image: p5.Image[];
    hitBox: HitBox;
    width: number;
    height: number;
    speed: number;
}
class GameManager {
    private gameState: IGameState;
    public rocket: Rocket;
    private obstacleData: ObstacleData[]
    public obstacles: Obstacle[]
    private timeCounter: number;
    private speedDuration: number;
    public scoreBoard: ScoreBoard;

    constructor(gameState: IGameState) {
        this.gameState = gameState;
        this.rocket = new Rocket(10, (height - 115) / 2, 115, 63, 5)
        this.scoreBoard = new ScoreBoard();

        this.timeCounter = 0;
        this.speedDuration = 0;
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
    }

    public update() {
        this.speedDuration += deltaTime;
        if (this.speedDuration >= 8000) {
            for (let i = 0; i < this.obstacles.length; i++) {
                this.obstacles[i].increaseSpeed();
                this.speedDuration = 0;
            }
        }

        if (this.rocket.x >= (width - this.rocket.width) / 3) {
            this.timeCounter += deltaTime;
            if (this.timeCounter >= 1500) {
                this.createObstacle();
                this.timeCounter = 0;
            }
        }

        this.rocket.update();
        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].update();
        }
    }

    private createObstacle() {
        const obstacleData = random(this.obstacleData);
        let yPos = random(-10, height - obstacleData.height + 10);
        let xPos = width;
        this.obstacles.push(new Obstacle(obstacleData.image, obstacleData.hitBox, xPos, yPos, obstacleData.width, obstacleData.height, obstacleData.speed, random(200, 160)));
        //this.obstacles.push(new Obstacle(obstacleData.image, xPos, yPos, obstacleData.width, obstacleData.height, obstacleData.speed, random(200, 160)));
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

    private checkCollision() {
        for (let i = 0; i < this.obstacles.length; i++) {
            if (this.obstacles[i].hitBox.x1 < this.rocket.hitBox.x1 + this.rocket.hitBox.width1 &&
                this.obstacles[i].hitBox.x1  + this.obstacles[i].hitBox.width1 > this.rocket.hitBox.x1 &&
                this.obstacles[i].hitBox.y1 < this.rocket.hitBox.y1 + this.rocket.hitBox.height1 &&
                this.obstacles[i].hitBox.height1 + this.obstacles[i].hitBox.y1 > this.rocket.hitBox.y1) 
                {
                console.log('bang') 
                }
                // if (this.obstacles[i].x < this.rocket.x + this.rocket.width &&
                //     this.obstacles[i].x + this.obstacles[i].width > this.rocket.x &&
                //     this.obstacles[i].y < this.rocket.y + this.rocket.height &&
                //     this.obstacles[i].height + this.obstacles[i].y > this.rocket.y) 
                
                // this.gameState.setGameOver();
            }
    }
}