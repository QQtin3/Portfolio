import React, {useRef, useEffect, useState, useMemo} from "react";
import {useNavigate} from "react-router-dom";
import {Star} from "../util/Star";
import {STARS_CONFIG, LINKS_CONFIG} from "../../configConstellations";
import {randomizePosition} from "../util/randomUtil.ts";

export function ConstellationsStars() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [hoveredId, setHoveredId] = useState<number | null>(null);
	const navigate = useNavigate();

	const { pickedStars, pickedLink } = useMemo(() => {
		// Pick one constellation config at random (only once)
		const index = Math.floor(Math.random() * STARS_CONFIG.length);
		return {
			pickedStars: STARS_CONFIG[index], //
			pickedLink: LINKS_CONFIG[index],
		};
	}, []);

	// Build & link stars ONCE
	const stars = useMemo(() => {

		// Build stars objects
		const s: Star[] = pickedStars.map((s) => {
			const { x, y } = randomizePosition(s.x, s.y, 10);
			return new Star(s.id, x, y, s.route);
		});

		// Adding star links
		pickedLink.forEach(([a, b]) => {
			const s1 = s.find((star) => star.id === a);
			const s2 = s.find((star) => star.id === b);
			if (s1 && s2) s1.addLink(s2);
		});

		return s;
	}, [pickedStars, pickedLink]);

	// Draw stars & links
	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");

		const draw = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			stars.forEach((star: Star) => star.drawLinks(ctx, 0.4));
			stars.forEach((star: Star) => star.draw(ctx, star.id === hoveredId));
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
	}, [hoveredId, stars]);

	// Hover & click events
	useEffect(() => {
		const canvas = canvasRef.current;
		const handleMouseMove = (event: MouseEvent): void => {
			const rect = canvas.getBoundingClientRect();
			const x = event.clientX - rect.left;
			const y = event.clientY - rect.top;

			const hovered = stars.find((star: Star) => star.isHovered(x, y));
			setHoveredId(hovered ? hovered.id : null);
		};

		const handleClick = () => {
			if (hoveredId !== null) {
				const star = stars.find((s) => s.id === hoveredId);
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
	}, [hoveredId, navigate, stars]);

	return (
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
	);
}