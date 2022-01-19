/// <reference path="iscene.ts" />
class Game implements IScene {
    gameManager: GameManager;

    rocket?: Rocket;
    rocketImage?: AnimatedImage;
    obstacleImages: AnimatedImage[] = [];
    obstacles: Obstacle[] = [];

	physicsEngine : PhysicsEngine = new PhysicsEngine();

    constructor(gameManager: GameManager) {
        this.gameManager = gameManager;
    }

	setup() {
		this.rocketImage = new AnimatedImage(images.rocket, 115, 63, 500);
		this.rocket = new Rocket(this.gameManager, this.rocketImage, 10, (this.gameManager.window.height - this.rocketImage.height) / 2, this.rocketImage.width, this.rocketImage.height, 5);

        this.obstacleImages.push(new AnimatedImage(images.jellyFish, 50, 50, 500));
        this.obstacleImages.push(new AnimatedImage(images.alien, 50, 50, 500));
        this.obstacleImages.push(new AnimatedImage(images.meteor, 50, 50, 500));
        this.obstacleImages.push(new AnimatedImage(images.octopus, 50, 50, 500));
        this.obstacleImages.push(new AnimatedImage(images.palien, 50, 50, 500));
        this.obstacleImages.push(new AnimatedImage(images.saturn, 50, 50, 500));
        this.obstacleImages.push(new AnimatedImage(images.star, 50, 50, 500));
        this.obstacleImages.push(new AnimatedImage(images.planet, 50, 50, 500));
        this.obstacleImages.push(new AnimatedImage(images.superman, 50, 50, 500));

        this.createObstacle();
        this.createObstacle();
        this.createObstacle();
        this.createObstacle();
		this.physicsEngine.start();
	}

	update() {
		this.physicsEngine.update();
	}

    draw() {
        this.rocket?.display();
        
        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].draw();
        }
    }

    createObstacle() {
        let randomImage: AnimatedImage = random(this.obstacleImages);
        let yPos = random(randomImage.height, this.gameManager.window.height - randomImage.height);
        let xPos = this.gameManager.window.width;
		let obstacle = new Obstacle(this.gameManager, randomImage, xPos, yPos, 200, random(200,160));
        this.obstacles.push(obstacle);
		this.physicsEngine.addObject(obstacle);
    }
}