class AnimatedImage {
    frames: p5.Image[] = [];
    width: number = 0;
    height: number = 0;
    interval?: number = undefined;

	get currentFrame() {
		return this.frames[this.frameIndex];
	}

    private deltaTime: number = 0;
    private frameIndex: number = 0;

    constructor(frames: p5.Image[] | p5.Image, width: number, height: number, interval?: number) {
        if (Array.isArray(frames)) {
            this.frames = frames;
        } else {
            this.frames.push(frames);
        }

        this.width = width;
        this.height = height;
        this.interval = interval;
    }

    animate() {
        if (this.interval !== undefined) {
            this.deltaTime += deltaTime;
            if (this.deltaTime > this.interval) {
                this.frameIndex = (this.frameIndex + 1) % this.frames.length;
                this.deltaTime = this.deltaTime - this.interval;
            }
        }
    }

    draw(x: number, y: number) {
        this.animate();
        image(this.currentFrame, x, y, this.width, this.height);
    }
}