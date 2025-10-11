// NOTE: This file lists the different configurations for constellations showing on project page.

/*
 * How to add a new configuration :
 * - If you wanna changes routes or mission cards
 * - Add a new array with { id, x, y, route } objects (each representing a star).
 * - Add a matching index array in LINKS_CONFIG defining how stars will link between each other
 *
 * Coordinates (x, y) are in pixels — adjust to fit your canvas layout.
 */

export const STARS_CONFIG: Array<Array<{ id: number; x: number; y: number }>> = [
	// ✨ Orion-like constellation (5 stars)
	[
		{id: 1, x: 200, y: 300},
		{id: 2, x: 400, y: 250},
		{id: 3, x: 600, y: 350},
		{id: 4, x: 450, y: 480},
		{id: 5, x: 700, y: 500},
	],

	// ✨ Lyra-like constellation
	[
		{id: 1, x: 300, y: 200},
		{id: 2, x: 500, y: 220},
		{id: 3, x: 600, y: 300},
		{id: 4, x: 480, y: 450},
		{id: 5, x: 320, y: 400},
	],
];

export const LINKS_CONFIG: Array<Array<[number, number]>> = [
	[
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 5],
		[5, 1],
	],
	[
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 5],
		[1, 5],
	],
];