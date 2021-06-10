import getSourceName from '../../source/replace-placeholder/get-source-name';

it('Single source name', () => {
	const openedPlaceholder = 'aaa';

	const result = getSourceName(openedPlaceholder);

	expect(result).toBe('aaa');
});

it('Source name variants', () => {
	const sources = [ 'aaa', 'bbb', 'ccc' ];

	const openedPlaceholder = 'aaa|bbb';

	const result = getSourceName(openedPlaceholder);

	expect(sources).toContain(result);
});