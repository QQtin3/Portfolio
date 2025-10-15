// NOTE: This file lists the different configurations for constellations showing on project page.
// To edit routing paths, you also need to change some configuration in main.tsx

/*
 * How to add a new configuration:
 * - If you wanna changes routes or mission cards, edit GLOBAL_NODES_CONFIG
 * - Add a new array with { id, x, y, route } objects (each representing a star).
 * - Add a matching index array in LINKS_CONFIG defining how stars will link between each other
 *
 * Coordinates (x, y) are in pixels — adjust to fit your canvas layout.
 */

export const GLOBAL_NODES_CONFIG: {
    [key: number]: { route: string, name: string, description: string, languages: string[] }
} = {
    0: {
        route: '/project/1',
        name: 'MISSION: Zax Peaks',
        description: 'Une super description de projet',
        languages: ['javascript', 'java']},
    1: {
        route: '/project/2',
        name: 'MISSION: Schej.it',
        description: 'Une super description de projet',
        languages: ['github', 'php', 'javascript']},
    2: {
        route: '/project/3',
        name: 'MISSION: Stream Alerts',
        description: 'Une super description de projet',
        languages: ['github', 'php', 'javascript']},
    3: {
        route: '/project/4',
        name: 'MISSION: SiirzApp',
        description: 'Une super description de projet',
        languages: ['github', 'php', 'javascript']},
    4: {
        route: '/project/5',
        name: 'MISSION: Portfolio',
        description: 'Une super description de projet Une super description de projet Une super description de projet',
        languages: ['github', 'php', 'javascript']},
}


export const STARS_CONFIG: Array<Array<{ id: number; x: number; y: number }>> = [
    // ✨ Orion-like constellation (5 stars)
    [
        { id: 0, x: 0.2, y: 0.4 },
        { id: 1, x: 0.4, y: 0.3 },
        { id: 2, x: 0.6, y: 0.5 },
        { id: 3, x: 0.45, y: 0.65 },
        { id: 4, x: 0.7, y: 0.7 },
    ],

    // ✨ Lyra-like constellation
    [
        { id: 0, x: 0.3, y: 0.25 },
        { id: 1, x: 0.5, y: 0.27 },
        { id: 2, x: 0.65, y: 0.4 },
        { id: 3, x: 0.48, y: 0.6 },
        { id: 4, x: 0.32, y: 0.55 },
    ],
];

export const LINKS_CONFIG: Array<Array<[number, number]>> = [
    [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]],
    [[0, 1], [1, 2], [2, 3], [3, 4], [0, 4]],
];