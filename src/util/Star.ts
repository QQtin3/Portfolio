import {MissionLanguage} from "./MissionLanguage.ts";

/**
 * Star object to manage multiple nodes easily in order to create constellations.
 */
export class Star {
    id: number;  // Unique identifier
    x: number;
    y: number;
    radius: number;  // Star's width
    route: string;  // Route pushed when you click on the node
    missionName: string;
    missionDescription: string;
    missionLanguages: Array<MissionLanguage>;
    linkedNodes: Star[] = [];

    constructor(id: number, x: number, y: number, route: string, missionName: string, missionDescription: string, missionLanguages: string[], radius: number = 6) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.route = route;
        this.radius = radius;
        this.missionName = missionName;
        this.missionDescription = missionDescription;
        /* Loading languages objects to display icons on the mission card */
        const languagesObjects: Array<MissionLanguage> = []
        missionLanguages.forEach(language => {
            languagesObjects.push(new MissionLanguage(language));
        })
        this.missionLanguages = languagesObjects
    }

    /**
     * Draw current star
     * @param ctx CanvasRenderingContext2D
     * @param hovered Boolean to handle star changes when its hovered
     */
    draw(ctx: CanvasRenderingContext2D, hovered: boolean) {
        const localRadius: number = hovered ? this.radius + 5 : this.radius;  // Add some radius so the star is more visible
        ctx.beginPath();
        ctx.arc(this.x, this.y, localRadius, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
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

    drawingMissionContainer(ctx: CanvasRenderingContext2D, lineHeight: number = window.innerHeight * 0.1) {
        ctx.strokeStyle = `rgba(255,255,255, 1)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y - lineHeight);
        ctx.stroke();
    }
}
