import { TemplateProcessor } from '../source';

const sources = {
	fname: [ 'Andrew', 'Boris', 'Chris' ],
	lname: [ 'Anderson', 'Brown', 'Clark' ]
};

it('Should test TemplateProcessor', () => {
	const tp = new TemplateProcessor(sources);

	const result = tp.process('[fname] [lname]');

	expect(result).toBe('Hello world!');
});