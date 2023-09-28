import {ICard} from "./Body";

export function fillCardsArray (numberPairs: number): ICard[] {
    const cards: number[] = [];
    for(let i: number = 1; i < numberPairs; i++) {
        cards.push(i, i);
    }
    shuffle(cards);

    return cards.map((card: number, index: number): ICard  => {
        return {
            id: `card-${index}`,
            number: card,
            isOpen: false,
            isFindPair: false
        }
    });
}

function shuffle(array: number[]): number[] {
    let currentIndex: number = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export function filterUniqNumber(a: any) {
    for (var q=1, i=1; q<a.length; ++q) {
        if (a[q] !== a[q-1]) {
            a[i++] = a[q];
        }
    }

    a.length = i;
    return a;
}

