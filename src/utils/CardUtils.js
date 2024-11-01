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

// build initial game stuff
export const initCards = () => {
    let deck = shuffleDeck(generateDeck());
    while (!hasValidSet(deck.slice(0, 12))) {
        deck = shuffleDeck(deck);
    }
    const firstCards = shuffleDeck(deck.splice(0, 12));
    return { deck, firstCards };
};

// check if 3 cards form a set
export const isSet = (cards) => {
    const matchDiff = (x) => {
        const val1 = cards[0][x];
        const val2 = cards[1][x];
        const val3 = cards[2][x];

        return (val1 === val2 && val2 === val3) || (val1 !== val2 && val1 !== val3 && val2 !== val3);
    };

    return ['shape', 'color', 'shading', 'number'].every(matchDiff);
    // return ['shape', 'color', 'shading', 'number'].every(matchDiff);
};

// check for valid set in array
export const hasValidSet = (cards) => {
    const n = cards.length;
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                const potentialSet = [cards[i], cards[j], cards[k]];
                if (isSet(potentialSet)) {
                    return true;
                }
            }
        }
    }
    return false;
};

// find a set in a deck
export const findSet = (cards) => {
    const n = cards.length;
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                const potentialSet = [cards[i], cards[j], cards[k]];
                if (isSet(potentialSet)) {
                    return potentialSet;
                }
            }
        }
    }
    return false;
};
