import replacePlaceholder from '../../source/replace-placeholder';

const sources = {
	name: [ 'Andrew' ]
};

it('Replace placeholder, basic case', () => {
	const placeholder = '[name]';

	const result = replacePlaceholder(placeholder, sources);

	expect(result).toBe('Andrew');
});

it('No valid source found', () => {
	const placeholder = '[fname]';

	const result = replacePlaceholder(placeholder, sources);

	expect(result).toBe('[fname]');
});