import historyCheckPassed from './history-check-passed';

export default function getRandomItem(list: string[], useHistory = false): string {
	let result: string;

	do {
		const rnd = Math.random() * (list.length - 1);

		const idx = Math.round(rnd);

		result = list[idx];
	} while (useHistory && !historyCheckPassed(result, list));

	return result;
}