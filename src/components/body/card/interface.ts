import {ICard} from "../Body";

export interface ICardComponent {
    card: ICard;
    // cardClicked: () => void;
    // isCanOpen: boolean;
}

export enum CardStateEnum {
    isClose = 'isClose',
    isOpen = 'isOpen'
}
