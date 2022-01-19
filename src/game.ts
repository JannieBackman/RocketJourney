/// <reference path="iscene.ts" />
class Game implements IScene {
    gameManager: GameManager;

    rocket?: Rocket;
    obstacle?: Obstacle;
    rocketImage?: AnimatedImage;
    obstacleImages: AnimatedImage[] = [];
    obstacles: Obstacle[] = [];
    timeCounter: number;

	// physicsEngine : PhysicsEngine = new PhysicsEngine();

    constructor(gameManager: GameManager) {
        this.gameManager = gameManager;
        this.timeCounter = 0;
    }

	setup() {
		this.rocketImage = new AnimatedImage(images.rocket, 115, 63, 500);
		this.rocket = new Rocket(this.gameManager, this.rocketImage, 10, (this.gameManager.window.height - this.rocketImage.height) / 2, this.rocketImage.width, this.rocketImage.height, 5);

        this.obstacleImages.push(new AnimatedImage(images.jellyFish, 69, 42, 500));
        this.obstacleImages.push(new AnimatedImage(images.alien, 39, 72, 500));
        this.obstacleImages.push(new AnimatedImage(images.meteor, 216, 104, 500));
        this.obstacleImages.push(new AnimatedImage(images.octopus, 66, 57, 500));
        this.obstacleImages.push(new AnimatedImage(images.palien, 58, 62, 500));
        this.obstacleImages.push(new AnimatedImage(images.saturn, 129, 81, 500));
        this.obstacleImages.push(new AnimatedImage(images.star, 42, 42, 500));
        this.obstacleImages.push(new AnimatedImage(images.planet, 58, 50, 500));
        this.obstacleImages.push(new AnimatedImage(images.superman, 120, 62, 500));
		// this.physicsEngine.start();
	}

	update() {
	}

    draw() {
        this.rocket?.display();

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
        let randomImage: AnimatedImage = random(this.obstacleImages);
        let yPos = random(-20, this.gameManager.window.height - randomImage.height + 20);
        let xPos = this.gameManager.window.width - randomImage.width;
        this.obstacles.push(new Obstacle(this.gameManager, randomImage, xPos, yPos, 200, random(200,160)));

		// let obstacle = new Obstacle(this.gameManager, randomImage, xPos, yPos, 200, random(200,160));
        // this.obstacles.push(obstacle);
		// this.physicsEngine.addObject(obstacle);
    }
}