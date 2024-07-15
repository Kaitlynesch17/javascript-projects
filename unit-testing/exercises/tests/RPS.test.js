const whoWon = require('../RPS');

describe ("whoWon", function () {
    test("returns 'TIE!' when player 1 and player 2 make the same choice.", function (){
        let output = whoWon("paper", "paper");
        expect(output).toBe("TIE!");
    });
    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper.", function (){
        let output = whoWon("rock", "paper");
        expect(output).toBe("Player 2 wins!");
    });
    test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors.", function (){
        let output = whoWon("paper", "scissors");
        expect(output).toBe("Player 2 wins!");
    });
    test("returns 'Player 2 wins!' if P1 = scissors & P2 = rock.", function (){
        let output = whoWon("scissors", "rock");
        expect(output).toBe("Player 2 wins!");
    });
    test ("returns 'Invalid answer. No one wins.' if player chooses something other than rock, paper, or scissors.", function (){
        let output = whoWon("paper", "spock");
        expect(output).toBe("Invalid answer. No one wins.");
    });
});