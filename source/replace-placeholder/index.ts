import { TemplateSources } from '../template-sources';
import getRandomItem from './get-random-item';

export default function replacePlaceholder(placeholder: string, sources: TemplateSources) {
	const sourceName = placeholder.slice(1, -1);

	if (sourceName in sources) {
		return getRandomItem(sources[sourceName]);
	}

	return placeholder;
}