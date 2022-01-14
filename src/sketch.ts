//---- GLOBAL VARIABLES ----//
let game: Game;
// let sound: p5.SoundFile
let backgroundImage: p5.Image;
let startText: p5.Image;
let rocketImg: p5.Image;
let rocket: Rocket;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    // sound: p5.SoundFile = loadSound('../assets/mySound.wav');
    backgroundImage = loadImage('/assets/images/background-1.svg');
    startText = loadImage('/assets/images/Rocket-Journey.svg');

    rocketImg = loadImage('/assets/images/rocket-1.svg')



}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    // noCursor();
    // game = new Game();

    game = new Game();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
    // background('blue');
    background('rgb(0, 4, 10)');
    // image(startText, ((windowWidth * .5) - (imgW8percent * .5)), ((windowHeight * .5) - (imgH8percent * .5)) + (imgH8percent / 2 - startText.height / 2));
    // fill('green');
    // stroke('white');
    // strokeWeight(10);
    // circle(width * .5, height * .5, width * 0.2);
    //background('rgb(0, 4, 10)');
    // image(img, (windowWidth*.5)-(img.width*.05), (windowHeight*.5)-(img.height*.05), img.width*0.1, img.height*0.1);
    // game.update();
    // game.draw();

    game.displayBackground();
}


/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    game.resize(windowWidth, windowHeight);

}

