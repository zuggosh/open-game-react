import {fillCardsArray} from "../../components/body/cards-hepler";
import {ICard} from "../../components/body/Body";
import {updateObjectInArray} from "./helpers";

const cardStateDefault: ICard[] = fillCardsArray(10);
export enum cardStateType {
    openingCard = 'openingCard',
    closingCards = 'closingCards',
    saveOpened = 'saveOpened'
}

const cardReducer = (cardState = cardStateDefault, action: any) => {
    switch (action.type) {
        case cardStateType.openingCard:
            return updateObjectInArray(cardState, action);
        case cardStateType.closingCards:
            return cardState;
        case cardStateType.saveOpened:
            return cardState;
        default:
            return cardState
    }
}

export default cardReducer;
