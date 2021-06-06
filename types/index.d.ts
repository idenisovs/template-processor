export interface TemplateSources {
    [name: string]: string[];
}
export declare class TemplateProcessor {
    sources: TemplateSources;
    constructor(sources: TemplateSources);
}
