export function getRandomIndex( max ) {
	return Math.floor( Math.random() * max );
}

// Pick a random index in [0, max), avoiding the previous one so we don't
// repeat back-to-back. `random` is injectable to keep the logic testable.
export function getNextIndex( max, previous, random = getRandomIndex ) {
	if ( max <= 1 ) {
		return 0;
	}
	let index = random( max );
	while ( index === previous ) {
		index = random( max );
	}
	return index;
}
