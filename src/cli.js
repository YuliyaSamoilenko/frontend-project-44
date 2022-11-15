import readlineSync from 'readline-sync';

export default () => {
	userName = String;
	const userName = readlineSync.question('May I have your name?');
	console.log("Welcome to the Brain Games!");
	console.log('Hello,' + userName + '!');	
};	
