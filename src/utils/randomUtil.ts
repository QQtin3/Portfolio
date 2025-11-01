/**
 * Adds a random offset to a coordinate, within a percent of the value.
 */
export function randomizePosition(x: number, y: number, percent: number) {
	const factor = percent / 100;
	const offsetX = x * (Math.random() * factor * 2 - factor);
	const offsetY = y * (Math.random() * factor * 2 - factor);
	return {
		x: x + offsetX,
		y: y + offsetY,
	};
}