const history = new Map<string[], string[]>()

export default function historyCheckFailed(item: string, list: string[], historySize = 5): boolean {
	if (!history.has(list)) {
		history.set(list, [ item ]);
		return false;
	}

	if (list.length < 2) {
		return false;
	}

	const historyList = history.get(list)!;

	if (historyList.indexOf(item) !== -1) {
		return true;
	}

	historyList.push(item);

	const maxSize = Math.min(list.length, historySize) - 1;

	if (historyList.length >= maxSize) {
		historyList.shift();
	}

	return false;
}