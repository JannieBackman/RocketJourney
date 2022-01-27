interface Images {
	background: p5.Image[],
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
	leaderBoard: p5.Image
}

interface Sound {
	bgm: p5.SoundFile,
	gamestart: p5.SoundFile,
	gameover: p5.SoundFile,
	collision: p5.SoundFile,
	bgmgameover: p5.SoundFile
}

let game: Game;
let images: Images;
let font: p5.Font;
let sound: Sound;

function preload() {
	images = {
		background: [
			loadImage('/assets/images/background-3.svg'),
			loadImage('/assets/images/background-2.svg'),
			loadImage('/assets/images/background-1.svg')
		],
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
		leaderBoard: loadImage('/assets/images/leaderboard.svg'),
	};
	font = loadFont('/assets/font/PressStart2P-Regular.ttf');
	sound = {
		bgm: loadSound('/assets/sound/bgm.mp3'),
		gamestart: loadSound('/assets/sound/gamestart.mp3'),
		gameover: loadSound('/assets/sound/gameover.mp3'),
		collision: loadSound('/assets/sound/explosion.mp3'),
		bgmgameover: loadSound('/assets/sound/bgmgameover.mp3')
	}
}

function setup() {
	createCanvas(800, 600);
	frameRate(30);
	game = new Game;
}

function update() {
	// if (game.scene.update !== undefined) {
	//  	game.scene.update();
	// }
}

function draw() {
	game.update();
	game.draw();
}