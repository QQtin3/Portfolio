/**
 * Dynamically import all images from the languages-logo folder
 */
const languageImports = import.meta.glob('../assets/img/languages-logo/*.png', { eager: true, query: '?url' });

/**
 * Helper function to extract language name from file path
 */
function getLanguageNameFromPath(path: string): string {
	const match = path.match(/\/([\w-]+)\.png$/);
	return match ? match[1] : '';
}

/**
 * Build a map of language name -> image URL
 */
const languageMap: Record<string, string> = {};
for (const path in languageImports) {
	const name : string = getLanguageNameFromPath(path);
	if (name) {
		// If languageImports[path] is a module, grab the default export
		const imported = languageImports[path] as any;
		languageMap[name] = imported?.default || imported;
	}
}


/**
 * Mission language object used to display languages logo on the footer part of MissionCard component.
 */
export class MissionLanguage {
	name: string
	imageObject?: string | null

	constructor(name: string) {
		this.name = name;
		this.imageObject = languageMap[name] || null;
	}
}