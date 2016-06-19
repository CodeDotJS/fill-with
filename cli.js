#!/usr/bin/env node

'use strict';

const ansi = require('ansi-rainbow');
const chalk = require('chalk');

const colors = require('colors/safe');

const argv = require('yargs')
    .usage(colors.cyan.bold('\nUsage: $0 -w 118 -l 37'))
    .describe('w', 'Change width when you resize your console.')
    .describe('l', 'Adjust rainbow\'s height')
    .demand(['w', 'l'])
    .argv;

let colString = '.';

while (colString.length % argv.w !== 0) {
	colString += ' ';
}

const l = colString.length;

let spaces = '';
let i = 0;
for (; i < l; i++) {
	spaces += ' ';
}

ansi
    .options({
	color_space: true,
	gap: l / argv.w
    })
    .skip(ansi._backgrounds)
    .skip(ansi._colors)
    .add('bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow bgBlue bgWhite bgRed bgGreen bgBlack bgMagenta bgCyan bgYellow');

console.log(ansi.bg(spaces));
console.log(chalk.black(ansi.bg(colString)));

let count = 0;
for (let tempIn = 0; tempIn < argv.l; tempIn++) {
	console.log(ansi.bg(spaces));
	count += 1;
}
