import {fillCardsArray} from "../../components/body/cards-hepler";
import {ICard} from "../../components/body/Body";

const cardStateDefault: ICard[] = fillCardsArray(10);
export enum cardStateType {
    openingCard,
    closingCards,
    saveOpened
}


function updateObjectInArray(array: ICard[], action: any) {
    return array.map((item, index) => {
        if (item.id !== action.payload.id) {
            return item
        }

        const newValue = Object.assign({}, action.payload);
        newValue.isOpen = true;

        // Otherwise, this is the one we want - return an updated value
        return {
            ...item,
            ...newValue
        }
    })
}

const cardReducer = (cardState = cardStateDefault, action: any) => {
    switch (action.type) {
        case cardStateType.openingCard:
            console.log(action);
            console.log(cardState);
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
