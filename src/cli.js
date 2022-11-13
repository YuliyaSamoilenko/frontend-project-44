import readlineSync from 'readline-sync';

export var userName = readlineSync.question('May I have your name?');
	console.log('Hello,' + userName + '!');

