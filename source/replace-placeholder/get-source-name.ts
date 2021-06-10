import getRandomItem from '../utils/get-random-item';

export default function getSourceName(placeholder: string): string {
	if (placeholder.indexOf('|') === -1) {
		return placeholder;
	}

	const sources = placeholder.split('|');

	return getRandomItem(sources).trim();
}