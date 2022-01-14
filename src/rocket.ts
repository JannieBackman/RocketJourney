class Rocket {

    constructor() {
        this.x = (windowWidth * .5) - (backgroundImage.width * .05)
        this.y = (windowHeight * .5) - (backgroundImage.height * .01)
        this.width = backgroundImage.width * .1 * .8;
        this.height = backgroundImage.height * .1 * .8;

    }



    display() {
        image(rocketImg, this.x, this.y, this.width, this.height);
    }

}