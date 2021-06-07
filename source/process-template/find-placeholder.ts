export default function findPlaceholder(template: string): string {
	const openingBraceIdx = template.indexOf('[');

	if (openingBraceIdx === -1) {
		return '';
	}

	const closingBraceIdx = template.indexOf(']', openingBraceIdx);

	if (closingBraceIdx === -1) {
		return '';
	}

	return template.substring(openingBraceIdx, closingBraceIdx + 1);
}