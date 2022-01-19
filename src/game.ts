/// <reference path="iscene.ts" />
class Game implements IScene {
    gameManager: GameManager;

    rocket?: Rocket;
    obstacle?: Obstacle;
    rocketImage?: p5.Image;
    obstacleData: object[] = [];
    obstacles: Obstacle[] = [];
    timeCounter: number;
	// physicsEngine : PhysicsEngine = new PhysicsEngine();

    constructor(gameManager: GameManager) {
        this.gameManager = gameManager;
        this.timeCounter = 0;
    }

	setup() {
        this.rocket = new Rocket(this.gameManager, images.rocket, 10, (this.gameManager.window.height - 115) /2, 115, 63, 5)
		// this.rocketImage = new AnimatedImage(images.rocket, 115, 63, 500);
		// this.rocket = new Rocket(this.gameManager, this.rocketImage, 10, (this.gameManager.window.height - this.rocketImage.height) / 2, this.rocketImage.width, this.rocketImage.height, 5);

        this.obstacleData.push({image: images.jellyFish, width: 69, height: 42, speed: 1});
        this.obstacleData.push({image: images.alien, width: 39, height: 72, speed: 1});
        this.obstacleData.push({image: images.meteor, width: 216, height: 104, speed: 1});
        this.obstacleData.push({image: images.octopus, width: 66, height: 57, speed: 1});
        this.obstacleData.push({image: images.palien, width: 58, height: 62, speed: 1});
        this.obstacleData.push({image: images.saturn, width: 129, height: 81, speed: 1});
        this.obstacleData.push({image: images.star, width: 42, height: 42, speed: 1});
        this.obstacleData.push({image: images.planet, width: 58, height: 50, speed: 1});
        this.obstacleData.push({image: images.superman, width: 120, height: 62, speed: 1});
		// this.physicsEngine.start();
	}

	update() {
	}

    draw() {
        this.rocket?.draw();

        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].draw();
        }

        this.timeCounter += deltaTime;
        if (this.timeCounter >= 1500) {
            this.createObstacle(); 
            this.timeCounter = 0;
        }
    }

    createObstacle() {
        let obstacleData: object = random(this.obstacleData);
        let yPos = random(-20, this.gameManager.window.height - obstacleData.height + 20);
        let xPos = this.gameManager.window.width ;
        this.obstacles.push(new Obstacle(this.gameManager, obstacleData.image, xPos, yPos, obstacleData.width, obstacleData.height, obstacleData.speed + 3, random(200,160)));
    }
}