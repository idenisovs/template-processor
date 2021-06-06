export interface TemplateSources {
	[name: string]: string[]
}

export class TemplateProcessor {
	sources: TemplateSources;

	constructor(sources: TemplateSources) {
		this.sources = sources;
	}

	process(template: string): string {
		return 'Hello world!';
	}
}