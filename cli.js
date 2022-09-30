#!/usr/bin/env node

import momentTimezone from 'moment-timezone';
import fetch from 'node-fetch';
import minimist from 'minimist';
import fs from 'fs';


const args = minimist(process.argv.slice(2));

if (args.h) {
	const contents = fs.readFileSync("help.txt", 'utf-8');
	const helpText = contents.split(/\r?\n/);
	console.log(helpText);
	process.exit(0);
}

const tz = momentTimezone.tz.guess();

var timezone = args.t || timezone;
timezone = encodeURIComponent(tz)

const latitude = args.n || args.s * -1;
const longitude = args.e || args.w * -1;

const day = 1;

if (args.d != undefined) {
	day = args.d;
}


const echo = args.j;


const url = "https://api.open-meteo.com/v1/forecast?" + "latitude=" + latitude + "&longitude=" + longitude + "&daily=precipitation_hours&current_weather=true&timezone=" + timezone;

// console.log(url);

const response = await fetch(url);

const data = await response.json();

if (echo) {
	console.log(data);
	process.exit(0);
}

if (day == 0) {
  console.log("today.")
} else if (day > 1) {
  console.log("in " + day + " days.")
} else {
  console.log("tomorrow.")
}
