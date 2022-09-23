#!/usr/bin/env node

const fs = require('fs');
const minimist = require('minimist');
const timezone = require('moment-timezone');

const args = minimist(process.argv.slice(2));

if (args.h) {
	const contents = readFileSync("help.txt", 'utf-8');
	const helpText = contents.split(/\r?\n/);
	console.log(helpText);
	process.exit(0);
}

const timezone = moment.tz.guest();


