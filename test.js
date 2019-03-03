const {play, game} = require('./rockpaperscissors.js')

let winner = 0;

function main() {
    let testsPassed = 0;
    let testsFailed = 0;

    // output header
    console.log("Running RockPaperScissors tests...");

    // Round tests
    console.log("Round tests...");

    // rock blunts scissors
    let result = 0;

    result = play("Rock", "Scissors");

    if (result == 1) {
        testsPassed++;
        console.log("rock blunts scissors (Rock, Scissors): PASS");
    } else {
        testsFailed++;
        console.log("rock blunts scissors (Rock, Scissors): FAIL - expected 1 but was %d", result);
    }

    result = play("Scissors", "Rock");

    if (result == 2) {
        testsPassed++;
        console.log("rock blunts scissors (Scissors, Rock): PASS");
    } else {
        testsFailed++;
        console.log("rock blunts scissors (Scissors, Rock): FAIL - expected 2 but was %d", result);
    }

// scissors cut paper
    result = play("Scissors", "Paper");

    if (result == 1) {
        testsPassed++;
        console.log("scissors cut paper (Scissors, Paper): PASS");
    } else {
        testsFailed++;
        console.log("scissors cut paper (Scissors, Paper): FAIL - expected 1 but was %d", result);
    }

    result = play("Paper", "Scissors");

    if (result == 2) {
        testsPassed++;
        console.log("scissors cut paper (Paper, Scissors): PASS");
    } else {
        testsFailed++;
        console.log("scissors cut paper (Paper, Scissors): FAIL - expected 2 but was %d", result);
    }

// paper wraps rock
    result = play("Paper", "Rock");

    if (result == 1) {
        testsPassed++;
        console.log("paper wraps rock (Paper, Rock): PASS");
    } else {
        testsFailed++;
        console.log("paper wraps rock (Paper, Rock): FAIL - expected 1 but was %d", result);
    }

    result = play("Rock", "Paper");

    if (result == 2) {
        testsPassed++;
        console.log("paper wraps rock (Rock, Paper): PASS");
    } else {
        testsFailed++;
        console.log("paper wraps rock (Rock, Paper): FAIL - expected 2 but was %d", result);
    }

// round is a draw
    result = play("Rock", "Rock");

    if (result == 0) {
        testsPassed++;
        console.log("round is a draw (Rock, Rock): PASS");
    } else {
        testsFailed++;
        console.log("round is a draw (Rock, Rock): FAIL - expected 0 but was %d", result);
    }

    result = play("Scissors", "Scissors");

    if (result == 0) {
        testsPassed++;
        console.log("round is a draw (Scissors, Scissors): PASS");
    } else {
        testsFailed++;
        console.log("round is a draw (Scissors, Scissors): FAIL - expected 0 but was %d", result);
    }

    result = play("Paper", "Paper");

    if (result == 0) {
        testsPassed++;
        console.log("round is a draw (Paper, Paper): PASS");
    } else {
        testsFailed++;
        console.log("round is a draw (Paper, Paper): FAIL - expected 0 but was %d", result);
    }

// invalid inputs not allowed
    let exception = null;

    try {
        play("Blah", "Foo");
    } catch (e) {
        exception = e;
    }

    if (exception == 'Invalid Move') {
        testsPassed++;
        console.log("invalid inputs not allowed: PASS");
    } else {
        testsFailed++;
        console.log("invalid inputs not allowed: FAIL - expected Invalid Move error");
    }

// Game tests
    console.log("Game tests...");

// player 1 wins game
    winner  = 0;

    let playRound = game(gameOver);

    playRound("Rock", "Scissors");
    playRound("Rock", "Scissors");


    result = winner;

    if (result == 1) {
        testsPassed++;
        console.log("player 1 wins game: PASS");
    } else {
        testsFailed++;
        console.log("player 1 wins game: FAIL - expected 1 but was %d", result);
    }

// player 2 wins game
    winner = 0;

    playRound = game(gameOver);

    playRound("Rock", "Paper");
    playRound("Rock", "Paper");

    result = winner;

    if (result == 2) {
        testsPassed++;
        console.log("player 2 wins game: PASS");
    } else {
        testsFailed++;
        console.log("player 2 wins game: FAIL - expected 2 but was %d", result);
    }

// drawers not counted
    winner = 0;

    playRound = game(gameOver);

    playRound("Rock", "Rock");
    playRound("Rock", "Rock");

    result = winner;

    if (result == 0) {
        testsPassed++;
        console.log("drawers not counted: PASS");
    } else {
        testsFailed++;
        console.log("drawers not counted: FAIL - expected 0 but was %d", result);
    }

//invalid moves not counted
    winner = 0;

    playRound = game(gameOver);

    try {
        playRound("Blah", "Foo");
        playRound("Rock", "Scissors");
    } catch(e) {

    }

    result = winner;

    if (result == 0) {
        testsPassed++;
        console.log("invalid moves not counted: PASS");
    } else {
        testsFailed++;
        console.log("invalid moves not counted: FAIL - expected 0 but was %d", result);
    }

    const testsRun = testsPassed + testsFailed;

    console.log('Tests run: %d  Passed: %d  Failed: %d', testsRun, testsPassed, testsFailed);
}


const gameOver = (player) => {
    winner = player;
}


main();