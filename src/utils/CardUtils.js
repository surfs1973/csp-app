// generate deck of 81 cards
export const generateDeck = () => {
    const shapes = ['oval', 'squiggle', 'diamond'];
    const colors = ['red', 'green', 'purple'];
    const shadings = ['solid', 'striped', 'open'];
    const numbers = [1, 2, 3];

    const deck = [];

    for (let shape of shapes) {
        for (let color of colors) {
            for (let shading of shadings) {
                for (let number of numbers) {
                    const key = `${shape}-${color}-${shading}-${number}`;
                    deck.push({ key, shape, color, shading, number });
                }
            }
        }
    }
    return deck;
};

// shuffle the deck randomly
export const shuffleDeck = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
};

// check if 3 cards form a set
export const isSet = (card1, card2, card3) => {
    const matchDiff = (x) => {
        const val1 = card1[x];
        const val2 = card2[x];
        const val3 = card3[x];

        return (val1 === val2 && val2 === val3) || (val1 !== val2 && val1 !== val3 && val2 !== val3);
    };
    return ['shape', 'color', 'shading', 'number'].every(matchDiff);
};

