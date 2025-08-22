// War card Game coding project requirments:
// Deal 26 Cards to each Player from a Deck of 52 cards.
// Iterate through the turns where each Player plays a Card.
// The Player who played the higher card is awarded a point.
// -Ties result in zero points for both Players.
// After all cards have been played, display the score and declare the winner.

// Function to create a standard deck of 52 cards
function createDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']; // Four suits in a deck
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] // Card values, 11=Jack, 12=Queen, 13=King, 14=Ace
    let deck = [];
    // Loop through each suit and value to create all card combinations
    for (let suit of suits) {
        for (let value of values) {
            deck.push({ value, suit }); // Add card object to deck
        }
    }
    return deck; // Return the completed deck
}

// Function to shuffle the deck 
function shuffle(deck) {
    // Start from the last card and swap each card with a random earlier card
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Pick a random index from 0 to i
        [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap the cards
    }
    return deck; // Return the shuffled deck
}

// Create and shuffle the deck
const deck = shuffle(createDeck());

// Deal 26 cards to each player by slicing the deck
const player1 = deck.slice(0, 26); // First half for Player 1
const player2 = deck.slice(26, 52); // Second half for Player 2

// Initialize scores for both players
let player1Score = 0;
let player2Score = 0;

// Loop through each round (26 rounds in total)
for (let i = 0; i < 26; i++) {
    const card1 = player1[i]; // Player 1's card for this round
    const card2 = player2[i]; // Player 2's card for this round

    // Determine the result of the round
    let roundResult = "";
    if (card1.value > card2.value) {
        player1Score++; // Player 1 gets a point
        roundResult = "Player 1 wins the round";
    } else if (card2.value > card1.value) {
        player2Score++; // Player 2 gets a point
        roundResult = "Player 2 wins the round";
    } else {
        roundResult = "Tie"; // No points for a tie
    }

    // Print the cards played and the result of the round
    console.log(
        `Round ${i + 1}: Player 1 plays ${card1.value} of ${card1.suit}, ` +
        `Player 2 plays ${card2.value} of ${card2.suit} -> ${roundResult}`
    );
}

// Print the final scores for both players
console.log(`Player 1 Score: ${player1Score}`);
console.log(`Player 2 Score: ${player2Score}`);

// Announce the winner or if it's a tie
if (player1Score > player2Score) {
    console.log("Player 1 wins!");
} else if (player2Score > player1Score) {
    console.log("Player 2 wins!");
} else {
    console.log("It's a tie!");
}
