import { ICard } from "../../components/body/Body";
import { filterUniqNumber } from "../../components/body/cards-hepler";

export function updateObjectInArray(cards: ICard[], action: any) {
    return cards.map((card) => {
        if (card.id !== action.payload.id) {
            return card
        }
        const newCard = {...card};
        newCard.isOpen = true;

        return {
            ...card,
            ...newCard
        }
    })
}

const checkPairCard = (openCards: ICard[]): any => {
    if(openCards.length === 2) {
        const cardsNumbers: number[] = openCards.map(card => {
            return card.number;
        });
        const isGotPair: boolean = filterUniqNumber(cardsNumbers).length === 1;

        if(isGotPair) {
            // this.markOpenCards(openCards);
        } else {
            // this.closeOpenCards(openCards);
        }
    }
}

const closeOpenCards = (openCards: ICard[]) => {
    setTimeout((): void => {
        openCards.forEach((card: ICard): void => {
            card.isOpen = false;
        });
    }, 800);
}
