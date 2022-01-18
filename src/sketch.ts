
interface Images {
    backgroundImages: p5.Image[];
    logoImage: p5.Image[];
    startTextImage: p5.Image[];
    upAndDownImage: p5.Image[];
    rocketImages: p5.Image[];
    jellyFishImages: p5.Image[];
    alienImages: p5.Image[];
    meteorImages: p5.Image[];
    octopusImages: p5.Image[];
    palienImages: p5.Image[];
    saturnImages: p5.Image[];
    starImages: p5.Image[];
    planetLImages: p5.Image[];
    supermanImages: p5.Image[];
}

let game: Game;
let images: Images;

function preload() {
  images = {
    backgroundImages: [
        loadImage('/assets/images/background-3.svg'),
        loadImage('/assets/images/background-2.svg'),
        loadImage('/assets/images/background-1.svg')
    ],
    logoImage: [
        loadImage('/assets/images/Rocket-Journey.svg')
    ],
    startTextImage: [
        loadImage('/assets/images/start-game.svg')
    ],
    upAndDownImage: [
        loadImage('/assets/images/up-down.svg')
    ],
    rocketImages: [
        loadImage('/assets/images/rocket-1.svg'),
        loadImage('/assets/images/rocket-2.svg')
    ],
    jellyFishImages: [
        loadImage('/assets/images/jellyfish-1.svg'),
        loadImage('/assets/images/jellyfish-2.svg')
    ], 
    alienImages: [
        loadImage('/assets/images/alien-1.svg'),
        loadImage('/assets/images/alien-2.svg')
    ],
    meteorImages: [
        loadImage('/assets/images/meteor-1.svg'),
        loadImage('/assets/images/meteor-2.svg')
    ],
    octopusImages: [
        loadImage('/assets/images/octopus-1.svg'),
        loadImage('/assets/images/octopus-2.svg')
    ],
    palienImages: [
        loadImage('/assets/images/palien-1.svg'),
        loadImage('/assets/images/palien-2.svg')
    ],
    saturnImages: [
        loadImage('/assets/images/saturn-1.svg'),
        loadImage('/assets/images/saturn-2.svg')
    ],
    starImages: [
        loadImage('/assets/images/star-1.svg'),
        loadImage('/assets/images/star-2.svg')
    ],
    planetLImages: [
        loadImage('/assets/images/planetl-1.svg'),
        loadImage('/assets/images/planetl-2.svg')
    ],
    supermanImages: [
        loadImage('/assets/images/superman-1.svg'),
        loadImage('/assets/images/superman-2.svg')
    ]
    }
    this.obstacleSprites.push(new Sprite(this.gameManager, jellyFishImages, 69, 42, 1000));
    this.obstacleSprites.push(new Sprite(this.gameManager, alienImages, 39, 72, 1000));
    this.obstacleSprites.push(new Sprite(this.gameManager, meteorImages, 216, 104, 1000));
    this.obstacleSprites.push(new Sprite(this.gameManager, octopusImages, 66, 57, 1000));
    this.obstacleSprites.push(new Sprite(this.gameManager, palienImages, 58, 62, 1000));
    this.obstacleSprites.push(new Sprite(this.gameManager, saturnImages, 129, 81, 1000));
    this.obstacleSprites.push(new Sprite(this.gameManager, starImages, 42, 42, 1000));
    this.obstacleSprites.push(new Sprite(this.gameManager, planetLImages, 58, 50, 1000));
    this.obstacleSprites.push(new Sprite(this.gameManager, supermanImages, 120, 62, 1000));
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    game = new Game();
}

function draw() {
  game.update();
  game.draw();
}