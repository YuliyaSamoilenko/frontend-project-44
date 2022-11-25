import readlineSync from 'readline-sync';

let number = () => {
    let answer = readlineSync.question('Answer "yes" if the number is even, otherwise answer "no".');
    
    const max = 100;
    
    number = Math.floor(Math.random(max) * max) 
        if (number % 2 == 0 && answer == "yes" || number % 2 != 0 && answer == "no") {
            result = "Correct!"
        };
        if (number % 2 == 0 && answer == "no") {
            result = " 'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, Bill! ";
            return result;
        };
        if (number % 2 != 0 && answer == "yes") {
            result = " 'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, Bill! ";
            return result;
        };
    

    console.log('Question:' + number);
    console.log('Your answer' + answer);
    console.log(result);
    alert('Congratulations, Bill!')
};
export default number;