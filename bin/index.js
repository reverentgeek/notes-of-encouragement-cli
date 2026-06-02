#!/usr/bin/env node
import fs from "node:fs/promises";
import os from "node:os";
import { resolve } from "node:path";
import chalk from "chalk";
import boxen from "boxen";
import { getNextIndex } from "./lib.js";

const __dirname = import.meta.dirname;
const statePath = resolve( os.homedir(), ".notes-of-encouragement-state.json" );

const boxenOptions = {
	padding: 1,
	margin: 0,
	borderStyle: "round",
	borderColor: "green"
};

async function readState() {
	try {
		const text = await fs.readFile( statePath, { encoding: "utf-8" } );
		return JSON.parse( text );
	} catch {
		return {};
	}
}

async function writeState( state ) {
	try {
		await fs.writeFile( statePath, JSON.stringify( state ), { encoding: "utf-8" } );
	} catch {
		// Persisting the last note is a nice-to-have; ignore failures.
	}
}

try {
	const text = await fs.readFile( resolve( __dirname, "notes.json" ), { encoding: "utf-8" } );
	const { notes, intros } = JSON.parse( text );
	const previous = await readState();

	const introIndex = getNextIndex( intros.length, previous.intro );
	const noteIndex = getNextIndex( notes.length, previous.note );

	const message = `${ intros[introIndex] }\n${ notes[noteIndex] }`;
	console.log( boxen( chalk.bold( message ), boxenOptions ) );

	await writeState( { intro: introIndex, note: noteIndex } );
} catch {
	console.error( chalk.red( "Sorry, I couldn't load a note right now ❤️" ) );
}
