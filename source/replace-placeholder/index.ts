import { TemplateSources } from '../template-sources';
import getUniqueRandomItem from '../utils/get-unique-radnom-item';

export default function replacePlaceholder(placeholder: string, sources: TemplateSources) {
	const sourceName = placeholder.slice(1, -1);

	if (sourceName in sources) {
		return getUniqueRandomItem(sources[sourceName]);
	}

	return placeholder;
}