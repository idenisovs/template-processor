import { TemplateSources } from '../template-sources';
import getUniqueRandomItem from '../utils/get-unique-radnom-item';
import getSourceName from './get-source-name';

export default function replacePlaceholder(placeholder: string, sources: TemplateSources) {
	const openPlaceholder = placeholder.slice(1, -1);

	const sourceName = getSourceName(openPlaceholder);

	if (sourceName in sources) {
		return getUniqueRandomItem(sources[sourceName]);
	}

	return placeholder;
}

