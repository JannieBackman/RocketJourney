//---- GLOBAL VARIABLES ----//
// let game: Game;
// let sound: p5.SoundFile
let img: p5.Image;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    // sound: p5.SoundFile = loadSound('../assets/mySound.wav');
    img = loadImage('/assets/images/background-1.svg');
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
    createCanvas(windowWidth, windowHeight);
    loadImage('/assets/images/background-1.svg')
    frameRate(60);
    // noCursor();
    // game = new Game();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
    // background('blue');
    background('rgb(0, 4, 10)');
    drawBackgroundImage();
    // fill('green');
    // stroke('white');
    // strokeWeight(10);
    // circle(width * .5, height * .5, width * 0.2);
    //background('rgb(0, 4, 10)');
    // image(img, (windowWidth*.5)-(img.width*.05), (windowHeight*.5)-(img.height*.05), img.width*0.1, img.height*0.1);
    // game.update();
    // game.draw();
}


/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function drawBackgroundImage() {
    let imgW80percent = img.width * .1 * .8;
    let imgH80percent = img.height * .1 * .8;

    if (windowWidth <= 800) {
        image(img, ((windowWidth*.5)-(imgW80percent*.5)), ((windowHeight*.5)-(imgH80percent*.5)), imgW80percent, imgH80percent);
    } else {
        image(img, (windowWidth*.5)-(img.width*.05), (windowHeight*.5)-(img.height*.05), img.width*.1, img.height*.1);
    }
}