import { TemplateSources } from './template-sources';
import processTemplate from './process-template';

export class TemplateProcessor {
	sources: TemplateSources;

	constructor(sources: TemplateSources) {
		this.sources = sources;
	}

	process(template: string): string {
		return processTemplate(template, this.sources);
	}
}