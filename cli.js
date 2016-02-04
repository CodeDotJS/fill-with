#!/usr/bin/env node

const ansi = require('ansi-rainbow');
const chalk = require('chalk');

const colors = require('colors');

colors.setTheme({
	tell: ['yellow', 'bold']
});

colors.setTheme({
	info: ['cyan', 'bold']
});

const argv = require('yargs')
    .usage('\nUsage: $0 -w 118 -l 37'.info)
    .describe('w', 'Change width when you resize your console.')
    .describe('l', 'Adjust rainbow\'s height')
    .demand(['w', 'l'])
    .argv;

var colString = '.';

while (colString.length % argv.w !== 0) {
	colString += ' ';
}

var l = colString.length;

var spaces = '';
var i = 0;
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

var count = 0;
for (var tempIn = 0; tempIn < argv.l; tempIn++) {
	console.log(ansi.bg(spaces));
	count += 1;
}