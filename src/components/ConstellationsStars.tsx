import {useRef, useEffect, useState, useMemo} from "react";
import {useNavigate} from "react-router-dom";
import {Star} from "../util/Star";
import {STARS_CONFIG, LINKS_CONFIG, GLOBAL_NODES_CONFIG} from "../config.ts";
import {randomizePosition} from "../util/randomUtil.ts";
import {MissionCard} from "./MissionCard.tsx";

export function ConstellationsStars() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [hoveredStar, setHoveredStar] = useState<Star | null>(null);
    const navigate = useNavigate();

    const {pickedStars, pickedLink} = useMemo(() => {
        // Pick one constellation config at random (only once)
        const index = Math.floor(Math.random() * STARS_CONFIG.length);  // Pick an index: [1; length - 1]
        return {
            pickedStars: STARS_CONFIG[index],
            pickedLink: LINKS_CONFIG[index],
        };
    }, []);

    // Build & link stars ONCE
    const stars = useMemo(() => {

        // Build stars objects
        const starObjects: Star[] = pickedStars.map((star): Star => {
            const x = star.x * window.innerWidth;
            const y = star.y * window.innerHeight;
            const {x: new_x, y: new_y} = randomizePosition(x, y, 10);
            const {route, name, description, languages} = GLOBAL_NODES_CONFIG[star.id];
            return new Star(star.id, new_x, new_y, route, name, description, languages);
        });

        // Adding star links
        pickedLink.forEach(([a, b]) => {
            const s1 = starObjects.find((star) => star.id === a);
            const s2 = starObjects.find((star) => star.id === b);
            if (s1 && s2) s1.addLink(s2);
        });

        return starObjects;
    }, [pickedStars, pickedLink]);

    // Draw stars and links
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            return;
        }
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach((star: Star) => star.drawLinks(ctx as CanvasRenderingContext2D, 0.4));
            stars.forEach((star: Star) => star.draw(ctx, star.id === hoveredStar?.id));
            stars.forEach((star: Star) => {
                if (star.id === hoveredStar?.id) {  // Draw a mission container if it's the hovered star.
                    star.drawingMissionContainer(ctx);
                }
            });
        };

        // Resizing canvas in case of a window size changing
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            draw();
        };

        requestAnimationFrame(resize);
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize); // Cleanup for performance
    }, [hoveredStar, stars]);

    // Hover & click events
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }
        const handleMouseMove = (event: MouseEvent): void => {

            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const hovered = stars.find((star: Star) => star.isHovered(x, y));
            setHoveredStar(hovered || null);
        };

        const handleClick = () => {
            if (hoveredStar?.id !== null) {
                const star = stars.find((s) => s.id === hoveredStar?.id);
                if (star) {
                    navigate(star.route);
                }
            }
        };

        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("click", handleClick);
        return () => {
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("click", handleClick);
        };
    }, [hoveredStar, navigate, stars]);

    const cardHeightPx = window.innerHeight * 0.2;
    const cardLineToStar =  window.innerHeight * 0.1 + 5;
    return (
        <div style={{ position: "relative" }}>
            <canvas
                ref={canvasRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "transparent",
                    zIndex: 1,
                    pointerEvents: "auto",
                }}
            />

            {hoveredStar && (
                <div
                    style={{
                        position: "absolute",
                        left: hoveredStar.x - 200,
                        top: hoveredStar.y - cardHeightPx - cardLineToStar,
                        zIndex: 10,
                    }}
                >
                    <MissionCard
                        missionName={hoveredStar.missionName}
                        missionDescription={hoveredStar.missionDescription}
                        missionLanguages={hoveredStar.missionLanguages}
                    />
                </div>
            )}
        </div>
    );
}