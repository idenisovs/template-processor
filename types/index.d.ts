import { TemplateSources } from './template-sources';
export declare class TemplateProcessor {
    sources: TemplateSources;
    constructor(sources: TemplateSources);
    process(template: string): string;
}
