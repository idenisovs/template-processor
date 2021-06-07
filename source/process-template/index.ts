import { TemplateSources } from '../template-sources';
import findPlaceholder from './find-placeholder';
import replacePlaceholder from '../replace-placeholder';

export default function processTemplate(template: string, sources: TemplateSources): string {
	let tmp = template;
	let placeholder: string;

	while (placeholder = findPlaceholder(tmp)) {
		tmp = tmp.replace(placeholder, replacePlaceholder(placeholder, sources));
	}

	return tmp;
}