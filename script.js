'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;

//document.querySelector('.number').textContent = secretNum;

//document.querySelector('.score').textContent = score;

let score = 20

let highscore = 0;

let displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)

    if (!guess) {

        //document.querySelector('.message').textContent = ' ⏹ No Number'

        displayMessage(' ⏹ No Number')

    } else if (guess === secretNum) {

        document.querySelector('.message').textContent = '✔ Correct number'

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').textContent = secretNum;

        if (score > highscore) {

            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }

    } else if (guess !== secretNum) {

        if (score > 1) {

            document.querySelector('.message').textContent = guess > secretNum ? '📈 Too high' : '📉 Too Low'

            score--

            document.querySelector('.score').textContent = score

            document.querySelector('')

        } else {

            document.querySelector('.message').textContent = 'Lose the game'

            document.querySelector('.score').textContent = 0;

        }

    }

    // else if (guess > secretNum) {

    //     if (score > 1) {

    //         document.querySelector('.message').textContent = '📈 Too high'

    //         score--

    //         document.querySelector('.score').textContent = score

    //         document.querySelector('')

    //     } else {

    //         document.querySelector('.message').textContent = 'Lose the game'

    //         document.querySelector('.score').textContent = 0;

    //     }

    // } else if (guess < secretNum) {

    //     if (score > 1) {

    //         document.querySelector('.message').textContent = '📉 Too low'

    //         score--

    //         document.querySelector('.score').textContent = score

    //     } else {

    //         document.querySelector('.message').textContent = 'Lose the game'

    //         document.querySelector('.score').textContent = 0;

    //     }

    // }
});

document.querySelector('.again').addEventListener('click', function () {

    let score = 20;

    secretNum = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...'

    document.querySelector('.score').textContent = score

    document.querySelector('.number').textContent = '?'

    document.querySelector('.guess').value = ''

    document.querySelector('body').style.backgroundColor = '#222'

})