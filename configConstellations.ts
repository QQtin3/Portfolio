// NOTE: This file lists the different configurations for constellations showing on project page.

/*
 * How to add a new configuration :
 * - Add a new array with { id, x, y, route } objects (each representing a star).
 * - Add a matching index array in LINKS_CONFIG defining how stars will link between each other
 *
 * Coordinates (x, y) are in pixels — adjust to fit your canvas layout.
 */

export const STARS_CONFIG: Array<Array<{ id: number; x: number; y: number; route: string }>> = [
	// ✨ Orion-like constellation (5 stars)
	[
		{ id: 1, x: 200, y: 300, route: "/star/1" },
		{ id: 2, x: 400, y: 250, route: "/star/2" },
		{ id: 3, x: 600, y: 350, route: "/star/3" },
		{ id: 4, x: 450, y: 480, route: "/star/4" },
		{ id: 5, x: 700, y: 500, route: "/star/5" },
	],

	// ✨ Lyra-like constellation
	[
		{ id: 1, x: 300, y: 200, route: "/star/lyra/1" },
		{ id: 2, x: 500, y: 220, route: "/star/lyra/2" },
		{ id: 3, x: 600, y: 300, route: "/star/lyra/3" },
		{ id: 4, x: 480, y: 450, route: "/star/lyra/4" },
		{ id: 5, x: 320, y: 400, route: "/star/lyra/5" },
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