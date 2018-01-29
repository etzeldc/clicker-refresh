///////////////////////
////    GLOBALS    ////
///////////////////////

var scoreOutput = document.querySelector('#scoreOutput');
var primeOutput = document.querySelector('#primeOutput');
var messageOutput = document.querySelector('#messageOutput');
var score = 67;
var primeCount = 0;
var random, rand1, rand2, rand3, rand4, rand5, randTotal;

///////////////////////
////    BUTTONS    ////
///////////////////////

// CLICKER BUTTON
document.getElementById('clicker').addEventListener('click', function() {
    messageOutput.textContent = '...';
    score++;
    primeBonus();
    stoner();
    eightySixer();
    devil();
    scoreOutput.textContent = score;
});

// RANDOM BUY BUTTON
document.getElementById('random').addEventListener('click', function() {
    buyRandom();
});

// FIVE RANDOM DRAW BUTTON
document.getElementById('fiveRandom').addEventListener('click', function() {
    buyFiveRandom(); 
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

// FIVE RANDOM DRAWS TOTAL
function sumFiveRandom() {
    randTotal = rand1 + rand2 + rand3 + rand4 + rand5;
    return randTotal;
}

// FIVE RANDOM DRAWS PURCHASE
function buyFiveRandom() {
    if (score < 200) {
        messageOutput.textContent = 'Your score isn\'t high enough';
    } else {
        score = score - 200;
        rand1 = randomNumber();
        rand2 = randomNumber();
        rand3 = randomNumber();
        rand4 = randomNumber();
        rand5 = randomNumber();
        score = score + sumFiveRandom();
        messageOutput.textContent = 'You bought ' + rand1 + ", " + rand2 + ", " + rand3 + ", " + rand4 + ", and " + rand5 + ', for a total of ' + randTotal + ' points.';
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
    if (score > 0 && isPrime(score) === true) {
        primeCount++;
        primeOutput.textContent = primeCount;
        if (primeCount === 20) {
            score = score * 2;
            primeCount = 0;
            primeOutput.textContent = primeCount;
        }
    }
}

// DEVIL 
function devil() {
    if (score === 666) {
        score = 0;
        messageOutput.textContent = 'The Devil took your points!';
    }
}

// STONER 
function stoner() {
    if (score === 420) {
        score = score + 1000;
        messageOutput.textContent = 'You found the Stoner\'s stash!';
    }
}

// 86er 
function eightySixer() {
    if (score !== 0 && score % 86 === 0) {
        score = score - 100;
        messageOutput.textContent = 'You got eighty sixed!';
    }
}