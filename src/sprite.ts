// class Sprite {
    // gameManager: GameManager;

    // get p5() {
    //     return this.gameManager.p5;
    // }

    // frames: p5.Image[] = [];
    // width: number = 0;
    // height: number = 0;
    // interval?: number = undefined;

    // private deltaTime: number = 0;
    // private frameIndex: number = 0;

//     constructor(gameManager: GameManager, frames: p5.Image[] | p5.Image, width: number, height: number, interval?: number) {
//         this.gameManager = gameManager;

//         if (Array.isArray(frames)) {
//             this.frames = frames;
//         } else {
//             this.frames.push(frames);
//         }

//         this.width = width;
//         this.height = height;
//         this.interval = interval;
//     }

//     animate() {
//         if (this.interval !== undefined) {
//             this.deltaTime += this.p5.deltaTime;
//             if (this.deltaTime > this.interval) {
//                 this.frameIndex = (this.frameIndex + 1) % this.frames.length;
//                 this.deltaTime = this.deltaTime - this.interval;
//             }
//         }
//     }

//     render(x: number, y: number) {
//         this.animate();
//         this.p5.image(this.frames[this.frameIndex], x, y, this.width, this.height);
//         image(this.frames[this.frameIndex], x, y, this.width, this.height)
//     }
// }