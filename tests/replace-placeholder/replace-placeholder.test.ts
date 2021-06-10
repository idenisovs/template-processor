import replacePlaceholder from '../../source/replace-placeholder';

const sources = {
	name: [ 'Andrew' ],
	cities: [ 'London' ],
	countries: [ 'USA' ]
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

it('Placeholder variants', () => {
	const placeholder = '[cities|countries]';

	const result = replacePlaceholder(placeholder, sources);

	expect(['London', 'USA']).toContain(result);
})