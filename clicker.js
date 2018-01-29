///////////////////////
////    GLOBALS    ////
///////////////////////

var scoreOutput = document.querySelector('#scoreOutput');
var primeOutput = document.querySelector('#primeOutput');
var messageOutput = document.querySelector('#messageOutput');
var score = 0;
var primeCount = 0;
var random;

///////////////////////
////    BUTTONS    ////
///////////////////////

// CLICKER BUTTON
document.getElementById('clicker').addEventListener('click', function() {
    messageOutput.textContent = '...';
    score++;
    primeBonus();
    scoreOutput.textContent = score;
});

// RANDOM BUY BUTTON
document.getElementById('random').addEventListener('click', function() {
    buyRandom();
});

/////////////////////////
////    FUNCTIONS    ////
/////////////////////////

// RANDOM NUMBER GENERATOR
function randomNumber() {
    random = Math.floor(Math.random() * 100);
    return random;
}
// TEST
// console.log(randomNumber());

// RANDOM NUMBER PURCHASE
function buyRandom() {
    if (score < 50) {
        messageOutput.textContent = 'Your score isn\'t high enough';
    } else {
        score = score - 50;
        randomNumber();
        messageOutput.textContent = 'You bought ' + random + ' points.';
        score = score + random;
        scoreOutput.textContent = score;
    }
}

// PRIME VERIFICATION
function isPrime(x) {
    for (var i = 2; i < x; i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}
// TESTS
// console.log(isPrime(3));
// console.log(isPrime(4));
// console.log(isPrime(22));
// console.log(isPrime(29));
// console.log(isPrime(177));

// PRIME BONUS
function primeBonus() {
    if (isPrime(score) === true) {
        primeCount++;
        primeOutput.textContent = primeCount;
        if (primeCount === 20) {
            score = score * 2;
            primeCount = 0;
            primeOutput.textContent = primeCount;
        }
    }
}