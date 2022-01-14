

class Game {
    x: number;
    y: number;
    width: number;
    height: number;

    constructor() {
        this.x = (windowWidth * .5) - (backgroundImage.width * .05);
        this.y = (windowHeight * .5) - (backgroundImage.height * .05);
        this.width = backgroundImage.width * .1;
        this.height = backgroundImage.height * .1;
    }

    resize(width: number, height: number) {
        this.x = (width * .5) - (backgroundImage.width * .05);
        this.y = (height * .5) - (backgroundImage.height * .05);
        this.width = backgroundImage.width * .1;
        this.height = backgroundImage.height * .1;
    }

    displayBackground() {
        let imgW80percent = backgroundImage.width * .1 * .8;
        let imgH80percent = backgroundImage.height * .1 * .8;

        if (windowWidth <= 800) {
            image(backgroundImage, ((windowWidth * .5) - (imgW80percent * .5)), ((windowHeight * .5) - (imgH80percent * .5)), imgW80percent, imgH80percent);
        } else {
            image(backgroundImage, this.x, this.y, this.width, this.height);
        }

    }
}