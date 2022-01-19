interface updateDelegate {
	(): void;
}

class PhysicsEngine {
	private lastUpdate: number = 0;
	public  updatesPerSecond: number = 0;
	private objects: MovingObject[] = [];

	public start() {
		this.lastUpdate = performance.now();
	}

	public addObject(object: MovingObject) {
		this.objects.push(object);
	}

	update() {
		let currentTimestamp: number = performance.now();
		let timeDelta = currentTimestamp - this.lastUpdate;
		this.updatesPerSecond = 1 / (timeDelta / 1000);
		this.lastUpdate = currentTimestamp;

		for(let object of this.objects) {
			object.x += (object.speed * (timeDelta / 1000)) * Math.cos(object.angle * Math.PI / 180);
			object.y += (object.speed * (timeDelta / 1000)) * Math.sin(object.angle * Math.PI / 180);
		}
	}
}