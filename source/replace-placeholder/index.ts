import { TemplateSources } from '../template-sources';

export default function replacePlaceholder(placeholder: string, sources: TemplateSources) {
	const sourceName = placeholder.slice(1, -1);

	if (sourceName in sources) {
		return sources[sourceName][0];
	}

	return placeholder;
}