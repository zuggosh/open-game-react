import React, {useState} from "react";
import './card.scss';
import CardImages from './cardImages';
import {CardStateEnum, ICardComponent} from "./interface";
import {useDispatch} from "react-redux";
import { cardStateType } from "../../../redux/cards/cardReducer";

function Card(props: ICardComponent)  {
    const dispatch = useDispatch();
    const [isCardState, setCardState] = useState(CardStateEnum.isClose);

    const cardClassName = (): string => {
        const cardClassName: string = 'card';
        return isCardState === CardStateEnum.isOpen
            ? `${cardClassName} card--isOpen`
            : `${cardClassName} card--isClose`;
    }

    const cardClick = (): void => {
        dispatch({type: cardStateType.openingCard, payload: props.card })
        setCardState(CardStateEnum.isOpen);
    }

    return (
        <div className={cardClassName()} onClick={cardClick}>
            {
                isCardState === CardStateEnum.isOpen &&
                <img
                    className={'card__faceImg'}
                    src={CardImages[`${props.card.number}`]}
                    alt={`card ${props.card.number}`}/>
            }
        </div>
    )
}

export default Card;
