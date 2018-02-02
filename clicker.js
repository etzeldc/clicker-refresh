///////////////////////
////    GLOBALS    ////
///////////////////////

var scoreOutput = document.querySelector('#scoreOutput');
var primeOutput = document.querySelector('#primeOutput');
var messageOutput = document.querySelector('#messageOutput');
var score = 0;
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

// SUPER CLICKER BUTTON
document.getElementById('superClicker').addEventListener('click', function() {
    messageOutput.textContent = '...';
    score = score + Math.floor(Math.random() * 3) + 1;
    primeBonus();
    stoner();
    eightySixer();
    devil();
    scoreOutput.textContent = score;
});

// MEGA CLICKER BUTTON
document.getElementById('megaClicker').addEventListener('click', function() {
    messageOutput.textContent = '...';
    score = score + Math.floor(Math.random() * 5) + 5;
    primeBonus();
    stoner();
    eightySixer();
    devil();
    scoreOutput.textContent = score;
});

// ULTRA CLICKER BUTTON
document.getElementById('ultraClicker').addEventListener('click', function() {
    messageOutput.textContent = '...';
    score = score + Math.floor(Math.random() * 10) + 10;
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

// SUPER CLICKER BUY BUTTON
document.getElementById('super').addEventListener('click', function() {
    buySuper();
});

// MEGA CLICKER BUY BUTTON
document.getElementById('mega').addEventListener('click', function() {
    buyMega();
});

// ULTRA CLICKER BUY BUTTON
document.getElementById('ultra').addEventListener('click', function() {
    buyUltra();
});

// AUTO CLICKER ONE BUY BUTTON
document.getElementById('autoOne').addEventListener('click', function() {
    buyAutoOne();
});

// AUTO CLICKER TWO BUY BUTTON
document.getElementById('autoTwo').addEventListener('click', function() {
    buyAutoTwo();
});

// AUTO CLICKER THREE BUY BUTTON
document.getElementById('autoThree').addEventListener('click', function() {
    buyAutoThree();
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
    if (score < 250) {
        messageOutput.textContent = 'Your score isn\'t high enough';
    } else {
        score = score - 250;
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

// SUPER CLICKER PURCHASE

function buySuper() {
    if (score < 5000) {
        messageOutput.textContent = 'Your score isn\'t high enough';
    } else {
        score = score - 5000;
        document.getElementById('clicker').style.display="none";
        document.getElementById('super').style.display="none"
        document.getElementById('superClicker').style.display="inline";
        document.getElementById('mega').style.display="inline";
        document.getElementById('autoOne').style.display = 'inline';
        messageOutput.textContent = "You just bought a Super Clicker!";
        scoreOutput.textContent = score;
    }
}

// MEGA CLICKER PURCHASE
function buyMega() {
    if (score < 25000) {
        messageOutput.textContent = 'Your score isn\'t high enough';
    } else {
        score = score - 25000;
        document.getElementById('superClicker').style.display="none";
        document.getElementById('mega').style.display='none';
        document.getElementById('megaClicker').style.display='inline';
        document.getElementById('ultra').style.display='inline';
        messageOutput.textContent = "You just bought a Mega Clicker";
        scoreOutput.textContent = score;
    }
}

// ULTRA CLICKER PURHCHASE
function buyUltra() {
    if (score < 100000) {
        messageOutput.textContent = 'Your score isn\'t high enough';
    } else {
        score = score - 100000;
        document.getElementById('megaClicker').style.display = 'none';
        document.getElementById('ultra').style.display = 'none';
        document.getElementById('ultraClicker').style.display = 'inline';
        messageOutput.textContent = "You just bought an Ultra Clicker";
        scoreOutput.textContent = score;
    }
}

// AUTO CLICKER ONE PURCHASE
function buyAutoOne() {
    if (score < 10000) {
        messageOutput.textContent = 'Your score isn\'t high enough';
    } else {
        score = score - 10000;
        document.getElementById('autoOne').style.display = 'none';
        document.getElementById('autoTwo').style.display = 'inline';
        setInterval(function() {
            score++;
            primeBonus();
            stoner();
            eightySixer();
            devil();
            scoreOutput.textContent = score;
        }, 1000);
        messageOutput.textContent = "You just bought an Auto Clicker";
    }
}

// AUTO CLICKER TWO PURCHASE
function buyAutoTwo() {
    if (score < 20000) {
        messageOutput.textContent = 'Your score isn\'t high enough';
    } else {
        score = score - 20000;
        document.getElementById('autoTwo').style.display = 'none';
        document.getElementById('autoThree').style.display = 'inline';
        setInterval(function() {
            score = score + 2;
            primeBonus();
            stoner();
            eightySixer();
            devil();
            scoreOutput.textContent = score;
        }, 1000);
        messageOutput.textContent = "You just bought a Double Auto Clicker";
    }
}

// AUTO CLICKER THREE PURCHASE
function buyAutoThree() {
    if (score < 50000) {
        messageOutput.textContent = 'Your score isn\'t high enough';
    } else {
        score = score - 50000;
        document.getElementById('autoThree').style.display = 'none';
        setInterval(function() {
            score = score + 5;
            primeBonus();
            stoner();
            eightySixer();
            devil();
            scoreOutput.textContent = score;
        }, 1000);
        messageOutput.textContent = "You just bought a Mega Auto Clicker";
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
