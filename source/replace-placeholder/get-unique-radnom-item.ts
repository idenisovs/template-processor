import historyCheckFailed from './history-check-failed';
import getRandomItem from './get-random-item';

export default function getUniqueRandomItem(list: string[]): string {
	let result: string;

	do {
		result = getRandomItem(list);
	} while(historyCheckFailed(result, list))


	return result;
}