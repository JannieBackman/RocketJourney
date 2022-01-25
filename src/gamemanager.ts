
interface GameWindow {
    width: number;
    height: number;
    x: number;
    y: number;
}
interface ObstacleData {
    image: p5.Image[];
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
            { image: images.jellyFish, width: 69, height: 42, speed: 3 },
            { image: images.alien, width: 39, height: 72, speed: 3 },
            { image: images.meteor, width: 216, height: 104, speed: 3 },
            { image: images.octopus, width: 66, height: 57, speed: 3 },
            { image: images.palien, width: 58, height: 62, speed: 3 },
            { image: images.saturn, width: 129, height: 81, speed: 3 },
            { image: images.star, width: 42, height: 42, speed: 3 },
            { image: images.planet, width: 58, height: 50, speed: 3 },
            { image: images.superman, width: 120, height: 62, speed: 3 },
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
        this.obstacles.push(new Obstacle(obstacleData.image, xPos, yPos, obstacleData.width, obstacleData.height, obstacleData.speed, random(200, 160)));
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
            if (this.obstacles[i].x < this.rocket.x + this.rocket.width &&
                this.obstacles[i].x + this.obstacles[i].width > this.rocket.x &&
                this.obstacles[i].y < this.rocket.y + this.rocket.height &&
                this.obstacles[i].height + this.obstacles[i].y > this.rocket.y) {
                
                this.gameState.setGameOver();
            }
        }
    }
}