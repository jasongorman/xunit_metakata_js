const play = (player1, player2) => {

    if (player1 == "Rock")
    {
        if (player2 == "Scissors")
            return 1;
        if (player2 == "Paper")
            return 2;
        if (player2 == "Rock")
            return 0;
    };
    if (player1 == "Paper")
    {
        if (player2 == "Rock")
            return 1;
        if (player2 == "Scissors")
            return 2;
        if (player2 == "Paper")
            return 0;
    };
    if (player1 == "Scissors")
    {
        if (player2 == "Paper")
            return 1;
        if (player2 == "Rock")
            return 2;
        if (player2 == "Scissors")
            return 0;
    };
    throw 'Invalid Move';
}

const game = (gameOver) => {

    let player1Score = 0;
    let player2Score = 0;

    function playRound(player1, player2) {
        var result = play(player1, player2);
        if (result == 1) player1Score++;
        if (result == 2) player2Score++;

        if (player1Score == 2) {
            gameOver(1);
        }

        if (player2Score == 2) {
            gameOver(2);
        }
    }

    return playRound;
}

module.exports = {play, game};