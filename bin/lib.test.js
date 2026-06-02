import test from "node:test";
import assert from "node:assert/strict";
import { getRandomIndex, getNextIndex } from "./lib.js";

test( "getRandomIndex stays within [0, max)", () => {
	for ( let i = 0; i < 1000; i++ ) {
		const index = getRandomIndex( 5 );
		assert.ok( index >= 0 && index < 5, `index ${ index } out of range` );
		assert.ok( Number.isInteger( index ), `index ${ index } is not an integer` );
	}
} );

test( "getNextIndex never repeats the previous index", () => {
	let previous = 0;
	for ( let i = 0; i < 1000; i++ ) {
		const index = getNextIndex( 5, previous );
		assert.notEqual( index, previous, "returned the previous index" );
		assert.ok( index >= 0 && index < 5, `index ${ index } out of range` );
		previous = index;
	}
} );

test( "getNextIndex returns 0 for a single-element array", () => {
	assert.equal( getNextIndex( 1, 0 ), 0 );
	assert.equal( getNextIndex( 1, undefined ), 0 );
} );

test( "getNextIndex returns 0 for an empty array", () => {
	assert.equal( getNextIndex( 0, undefined ), 0 );
} );

test( "getNextIndex avoids the previous index even when random keeps offering it", () => {
	// random offers 2, 2, 2, then 4 — should skip the 2s and settle on 4.
	const offers = [ 2, 2, 2, 4 ];
	let call = 0;
	const random = () => offers[call++];
	assert.equal( getNextIndex( 5, 2, random ), 4 );
} );

test( "getNextIndex accepts a first pick that differs from previous", () => {
	const random = () => 3;
	assert.equal( getNextIndex( 5, 1, random ), 3 );
} );
