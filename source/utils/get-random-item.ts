export default function getRandomItem(list: string[]): string {
	const rnd = Math.random() * (list.length - 1);

	const idx = Math.round(rnd);

	return list[idx];
}