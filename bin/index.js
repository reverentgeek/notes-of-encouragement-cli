#!/usr/bin/env node
import fs from "node:fs/promises";
import { resolve } from "node:path";
import chalk from "chalk";
import boxen from "boxen";

const __dirname = import.meta.dirname;

const boxenOptions = {
	padding: 1,
	margin: 0,
	borderStyle: "round",
	borderColor: "green"
};

function getRandomIndex( max ) {
	return Math.floor( Math.random() * max );
}

try {
	const text = await fs.readFile( resolve( __dirname, "notes.json" ), { encoding: "utf-8" } );
	const { notes, intros } = JSON.parse( text );
	const randomIntro = intros[getRandomIndex( intros.length )];
	const randomNote = notes[getRandomIndex( notes.length )];
	const message = `${ randomIntro }\n${ randomNote }`;
	console.log( boxen( chalk.bold( message ), boxenOptions ) );
} catch ( error ) {
	console.error( error );
}
