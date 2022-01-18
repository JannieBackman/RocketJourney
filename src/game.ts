/// <reference path="iscene.ts" />
class Game implements IScene {
    gameManager: GameManager;
    get p5() {
        return this.gameManager.p5;
    }

    rocket?: Rocket;
    rocketSprite?: Sprite;
    obstacleSprites: Sprite[] = [];
    obstacles: Obstacle[] = [];

    constructor(gameManager: GameManager) {
        this.gameManager = gameManager;
    }

    preload() {
        let rocketImages = [
            this.p5.loadImage('/assets/images/rocket-1.svg'),
            this.p5.loadImage('/assets/images/rocket-2.svg')
        ];
        this.rocketSprite = new Sprite(this.gameManager, rocketImages, 115, 63, 500);
        this.rocket = new Rocket(this.gameManager, this, 0, (this.gameManager.window.height - this.rocketSprite.height) / 2, this.rocketSprite.width, this.rocketSprite.height, 5);

        let jellyFishImages = [
            this.p5.loadImage('/assets/images/jellyfish-1.svg'),
            this.p5.loadImage('/assets/images/jellyfish-2.svg')
        ];

        let alienImages = [
            this.p5.loadImage('/assets/images/alien-1.svg'),
            this.p5.loadImage('/assets/images/alien-2.svg')
        ];

        let meteorImages = [
            this.p5.loadImage('/assets/images/meteor-1.svg'),
            this.p5.loadImage('/assets/images/meteor-2.svg')
        ];

        let octopusImages = [
            this.p5.loadImage('/assets/images/octopus-1.svg'),
            this.p5.loadImage('/assets/images/octopus-2.svg')
        ];

        let palienImages = [
            this.p5.loadImage('/assets/images/palien-1.svg'),
            this.p5.loadImage('/assets/images/palien-2.svg')
        ];

        let saturnImages = [
            this.p5.loadImage('/assets/images/saturn-1.svg'),
            this.p5.loadImage('/assets/images/saturn-2.svg')
        ];

        let starImages = [
            this.p5.loadImage('/assets/images/star-1.svg'),
            this.p5.loadImage('/assets/images/star-2.svg')
        ];

        let planetLImages = [
            this.p5.loadImage('/assets/images/planetl-1.svg'),
            this.p5.loadImage('/assets/images/planetl-2.svg')
        ];

        let supermanImages = [
            this.p5.loadImage('/assets/images/superman-1.svg'),
            this.p5.loadImage('/assets/images/superman-2.svg')
        ];

        this.obstacleSprites.push(new Sprite(this.gameManager, jellyFishImages, 50, 50, 500));
        this.obstacleSprites.push(new Sprite(this.gameManager, alienImages, 50, 50, 500));
        this.obstacleSprites.push(new Sprite(this.gameManager, meteorImages, 50, 50, 500));
        this.obstacleSprites.push(new Sprite(this.gameManager, octopusImages, 50, 50, 500));
        this.obstacleSprites.push(new Sprite(this.gameManager, palienImages, 50, 50, 500));
        this.obstacleSprites.push(new Sprite(this.gameManager, saturnImages, 50, 50, 500));
        this.obstacleSprites.push(new Sprite(this.gameManager, starImages, 50, 50, 500));
        this.obstacleSprites.push(new Sprite(this.gameManager, planetLImages, 50, 50, 500));
        this.obstacleSprites.push(new Sprite(this.gameManager, supermanImages, 50, 50, 500));

        this.createObstacle();
        this.createObstacle();
        this.createObstacle();
        this.createObstacle();

    }

    render() {
        this.rocket?.display();
        
        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].display();
        }
    }

    createObstacle() {
        let randomSprite: Sprite = this.p5.random(this.obstacleSprites);
        let yPos = this.p5.random(randomSprite.height, this.gameManager.window.height - randomSprite.height);
        let xPos = this.gameManager.window.width - randomSprite.width;
        this.obstacles.push(new Obstacle(this.gameManager, this, xPos, yPos, randomSprite, 5));
    }
}