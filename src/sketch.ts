/// <reference path="gamemanager.ts" />

interface Images {
	background: p5.Image[],
	logo: p5.Image,
	start: p5.Image,
	upAndDown: p5.Image,
	rocket: p5.Image[],
	jellyFish: p5.Image[],
	alien: p5.Image[],
	meteor: p5.Image[],
	octopus: p5.Image[],
	palien: p5.Image[],
	saturn: p5.Image[],
	star: p5.Image[],
	planet: p5.Image[],
	superman: p5.Image[]
	gameOver: p5.Image,
	restart: p5.Image,
	quit: p5.Image
}

let gameManager: GameManager = new GameManager();
let images: Images;

function preload() {
	images = {
		background: [
		    loadImage('/assets/images/background-3.svg'),
            loadImage('/assets/images/background-2.svg'),
            loadImage('/assets/images/background-1.svg')
		],
		logo: loadImage('/assets/images/Rocket-Journey.svg'),
		start: loadImage('/assets/images/start-game.svg'),
		upAndDown: loadImage('/assets/images/up-down.svg'),
		rocket: [
			loadImage('/assets/images/rocket-1.svg'),
            loadImage('/assets/images/rocket-2.svg')
		],
		jellyFish: [
            loadImage('/assets/images/jellyfish-1.svg'),
            loadImage('/assets/images/jellyfish-2.svg')
		],
		alien: [
            loadImage('/assets/images/alien-1.svg'),
            loadImage('/assets/images/alien-2.svg')
		],
		meteor: [
            loadImage('/assets/images/meteor-1.svg'),
            loadImage('/assets/images/meteor-2.svg')
		],
		octopus: [
            loadImage('/assets/images/octopus-1.svg'),
            loadImage('/assets/images/octopus-2.svg')
		],
		palien: [
            loadImage('/assets/images/palien-1.svg'),
            loadImage('/assets/images/palien-2.svg')
		],
		saturn: [
            loadImage('/assets/images/saturn-1.svg'),
            loadImage('/assets/images/saturn-2.svg')
		],
		star: [
            loadImage('/assets/images/star-1.svg'),
            loadImage('/assets/images/star-2.svg')
		],
		planet: [
            loadImage('/assets/images/planetl-1.svg'),
            loadImage('/assets/images/planetl-2.svg')
		],
		superman: [
            loadImage('/assets/images/superman-1.svg'),
            loadImage('/assets/images/superman-2.svg')
		],
		gameOver: loadImage('/assets/images/game-over.svg'),
		restart: loadImage('/assets/images/restart.svg'),
		quit: loadImage('/assets/images/quit.svg')
	};
}

function setup() {
	createCanvas(gameManager.window.width, gameManager.window.height);
	frameRate(30);
	gameManager.setup();
}

function update() {
	if(gameManager.scene.update !== undefined) {
		gameManager.scene.update();
	}
}

function draw() {
	update();
	gameManager.draw();
}

function keyPressed() {
	gameManager.keyPressed();
}