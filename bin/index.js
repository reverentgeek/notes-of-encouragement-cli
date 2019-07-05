#!/usr/bin/env node

const fs = require( "fs" );
const path = require( "path" );
const chalk = require( "chalk" );
const boxen = require( "boxen" );
const boxenOptions = {
  padding: 1,
  margin: 0,
  borderStyle: "round",
  borderColor: "green"
};

function getRandomIndex( max ) {
  return Math.floor( Math.random() * max );
}

fs.readFile( path.resolve( __dirname, "notes.json" ), { encoding: "utf-8" }, ( err, text ) => {
  if ( err ) {
    console.log( err );
    return;
  }
  const { notes, intros } = JSON.parse( text );
  const randomIntro = intros[getRandomIndex( intros.length )];
  const randomNote = notes[getRandomIndex( notes.length )];
  const message = `${ randomIntro }\n${ randomNote }`;
  console.log( boxen( chalk.bold( message ), boxenOptions ) );
} );