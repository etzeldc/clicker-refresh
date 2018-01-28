// GLOBALS
var scoreOutput = document.querySelector('#scoreOutput');
var primeOutput = document.querySelector('#primeOutput');
var messageOutput = document.querySelector('#messageOutput');
var score = 0;
var primeCount = 0;


// CLICKER FUNCTIONS
document.getElementById('clicker').addEventListener('click', function() {
    messageOutput.textContent = '';
    if (score === 0) { // if score is zero, turn it to one
        score = 1;
    } else if (isPrime(score) === true) { // checks to see if the score is prime
        primeCount++; // keeps count of how many times the score is prime
        primeOutput.textContent = primeCount; // shows that count
        score++;
        if (primeCount === 9) { // at every ninth prime...
            score = score * 1.7; // score increases 1.7 fold...
            primeCount = 0;
            primeOutput.textContent = primeCount; // and the prime count resets
        }
    } else {
        score++; // when no other condition is met, score increases by one
    }
    scoreOutput.textContent = score;
});

// BUYING EXTRAS
document.getElementById('random').addEventListener('click', function() {
    if (score < 50) {
        messageOutput.textContent = 'Your score isn\'t high enough';
    } else {
        score = score - 50;
        var rando = Math.floor(Math.random() * 100);
        messageOutput.textContent = 'You bought ' + rando + ' points.';
        score = score + rando;
        scoreOutput.textContent = score;
    }
});

// Determining if a number is prime
function isPrime(x) {
    for (var i = 2; i < x; i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}
// PRIME TESTS
// console.log(isPrime(3));
// console.log(isPrime(4));
// console.log(isPrime(22));
// console.log(isPrime(29));
// console.log(isPrime(13));