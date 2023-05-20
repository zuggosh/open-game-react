import React, {Component} from "react";
import './card.scss';
import { ICard } from '../Body';

interface ICard1 {
    card: ICard
}

class Card extends Component<ICard1> {

    constructor(props: any) {
        super(props);
        console.log(this.props);
    }

    render(): React.JSX.Element {
        return <div className={'card'}>
            {this.props.card.number}
        </div>
    }
}

export default Card;
