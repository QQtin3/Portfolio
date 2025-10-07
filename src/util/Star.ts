/**
 * Star object to manage multiple nodes easily in order to create constellations.
 */
export class Star {
	id: number;  // Unique identifier
	x: number;
	y: number;
	radius: number;  // Star's width
	route: string;  // Route pushed when you click on the node
	linkedNodes: Star[] = [];

	constructor(id: number, x: number, y: number, route: string, radius: number = 6) {
		this.id = id;
		this.x = x;
		this.y = y;
		this.route = route;
		this.radius = radius;
	}

	/**
	 * Draw current star
	 * @param ctx CanvasRenderingContext2D
	 * @param hovered Boolean to handle star color
	 */
	draw(ctx: CanvasRenderingContext2D, hovered: boolean) {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		ctx.fillStyle = hovered ? "#00ffff" : "#ffffff";
		ctx.fill();
	}

	/**
	 * Draw lines to linked stars
	 * @param ctx CanvasRenderingContext2D
	 * @param opacity Links opacity
	 */
	drawLinks(ctx: CanvasRenderingContext2D, opacity: number) {
		ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
		ctx.lineWidth = 1;
		this.linkedNodes.forEach((linkedStar) => {
			ctx.beginPath();
			ctx.moveTo(this.x, this.y);
			ctx.lineTo(linkedStar.x, linkedStar.y);
			ctx.stroke();
		});
	}

	/**
	 * Check if mouse is near this star
	 * @param mouseX Mouse X position
	 * @param mouseY Mouse Y position
	 * @param detectionRadius Radius from how far away the mouse should be before being detected like hovering
	 */
	isHovered(mouseX: number, mouseY: number, detectionRadius: number = 10) {
		const diffX = this.x - mouseX;
		const diffY = this.y - mouseY;
		return Math.hypot(diffX, diffY) < detectionRadius;
	}

	// Add a link to another star
	addLink(star: Star) {
		if (!this.linkedNodes.includes(star)) {
			this.linkedNodes.push(star);
		}
	}
}
