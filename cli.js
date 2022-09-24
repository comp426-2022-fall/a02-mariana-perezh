#!/usr/bin/env node

const fs = require('fs');
const minimist = require('minimist');
const momentTimezone = require('moment-timezone');

const args = minimist(process.argv.slice(2));

if (args.h) {
	const contents = fs.readFileSync("help.txt", 'utf-8');
	const helpText = contents.split(/\r?\n/);
	console.log(helpText);
	process.exit(0);
}

const timezone = moment.tz.guess();

const latitude = args.n || args.s;
const longitude = args.e || args.w;

const day = args.d || 1;

const echo = args.j;

//should be finding the appropriate request url

const url = "https://api.open-meteo.com/v1/forecast?" + "latitude=" + latitude + "&longitude=" + longitude + "&timezone" + timezone + "&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_hours,windspeed_10m_max,winddirection_10m_dominant" + "&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&past_days=" + day;

const response = await fetch(url);

const data = awaite response.json();



