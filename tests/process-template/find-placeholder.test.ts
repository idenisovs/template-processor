import findPlaceholder from '../../source/process-template/find-placeholder';

it('Simple placeholder case', () => {
	const template = 'Hello [name]!';
	const placeholder = findPlaceholder(template);
	expect(placeholder).toBe('[name]');
});

it('No placeholders provided', () => {
	const template = 'Hello world!';
	const placeholder = findPlaceholder(template);
	expect(placeholder).toBe('');
});

it('No closing brace', () => {
	const template = 'Hello [name!';
	const placeholder = findPlaceholder(template);
	expect(placeholder).toBe('');
});

it('Placeholder variants', () => {
	const template = 'Hello from [aaa|bbb]';
	const placeholder = findPlaceholder(template);
	expect(placeholder).toBe('[aaa|bbb]');
});