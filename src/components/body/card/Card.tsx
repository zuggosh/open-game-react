import React, {Component} from "react";
import './card.scss';
import { ICard } from '../Body';
import CardImages from './cardImages';

interface ICard1 {
    card: ICard;
    cardClicked: () => void;
    isCanOpen: boolean;
}

class Card extends Component<ICard1> {

    get cardClassName(): string {
        const cardClassName: string = 'card';
        if (this.props.card.isOpen) {
            return `${cardClassName} card--isOpen`;
        } else {
            return `${cardClassName} card--isClose`;
        }
    }

    cardClick(): void {
        if(this.props.isCanOpen) {
            this.props.card.isOpen = true;
            this.props.cardClicked();
            this.forceUpdate();
        }
    }

    render(): React.JSX.Element {
        return <div className={this.cardClassName} onClick={this.cardClick.bind(this)}>
            {
                this.props.card.isOpen &&
                <img
                    className={'card__faceImg'}
                    src={CardImages[`${this.props.card.number}`]}
                    alt={`card ${this.props.card.number}`}/>
            }
        </div>
    }
}

export default Card;
