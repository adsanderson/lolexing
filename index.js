import lolex from './node_modules/lolex/lolex'
let clock

export function begin () {
	clock = lolex.install();
}

export function end () {
	clock.uninstall();
}

export function setDate (date) {
	clock.setSystemTime(date)
}
