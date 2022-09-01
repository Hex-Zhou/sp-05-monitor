import { DuoTuneList } from "./../../models/duotune.type";

export function getDuotune(type: DuoTuneList, num: number) {
	let str = String(num);
	if (num < 10) str = "0" + str;
	if (num < 100) str = "0" + str;
	return `./assets/media/icons/duotune/${type}/${type.substring(0, 3)}${str}.svg`;
}
