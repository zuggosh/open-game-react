import React, {Component} from "react"
import Card from './card/Card';
import './body.scss';

export interface ICard {
    number: number;
    isExpand: boolean;
}

class Body extends Component {
    cards: ICard[] = fillCardsArray(10);

    render (): React.JSX.Element {
        return <div className={'body'}>
            <div className={'body__card-wrap'}>
                {this.cards.map( (card: ICard) => {
                    return (
                        <Card card={card}/>
                    );
                })}
            </div>
        </div>
    }
}

function fillCardsArray (numberPairs: number): ICard[] {
    const cards: number[] = [];
    for(let i: number = 1; i < numberPairs; i++) {
        cards.push(i, i);
    }
    shuffle(cards);

    return cards.map((card: number): ICard  => {
        return {
            number: card,
            isExpand: false
        }
    });
}

function shuffle(array: number[]): number[] {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export default Body;
