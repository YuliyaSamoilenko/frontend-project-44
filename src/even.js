import readlineSync from 'readline-sync';

export const greeting = () => {
	console.log('Welkome to the Brain Games!')
}


const random = (max) => {
	return Math.floor(Math.random() * max);
	};

export const brainEven = () => {
	const userName = readlineSync.question('May I have your name?  ');
	        console.log('Hello, ' + userName + '!');
	        
	console.log('Answer "yes" if the number is even, otherwise answer "no".');
	
	for (let i = 0; i < 3; i++) {
		const number = random(100);
		console.log('Question: ' + number);
		const answer = readlineSync.question('Your answer: ');
		if (number % 2 == 0 && answer == 'yes' || number % 2 != 0 && answer == 'no') {
			console.log('Correct!')
			} else {
				const incorrect = (answer == 'yes' ? 'no': 'yes');
				
				const result = (answer + " is wrong answer ;(. Correct answer was" + incorrect + ". \n Let's try again, " + userName + "!");
				console.log(result);
				break;
				};
		console.log('Congratulations, ' + userName + '!');
		}
	};
