import React, {Component} from "react"
import Card from './card/Card';
import {fillCardsArray, filterUniqNumber} from './cards-hepler';
import './body.scss';

export interface ICard {
    number: number;
    isOpen: boolean;
    isFindPair: boolean;
    id: string;
}

class Body extends Component {
    private cards: ICard[] = fillCardsArray(10);
    private isCanOpen: boolean = true;

    private cardClicked(): void {
        const openCards: ICard[] = this.cards.filter((card: ICard) => {
            return card.isOpen && !card.isFindPair;
        })
        this.checkPairCard(openCards);
    }

    private checkPairCard(openCards: ICard[]): void {
        if(openCards.length === 2) {
            this.isCanOpen = false;
            this.forceUpdate();
            const cardsNumbers: number[] = openCards.map(card => {
                return card.number;
            });
            const isGotPair: boolean = filterUniqNumber(cardsNumbers).length === 1;

            if(isGotPair) {
                this.markOpenCards(openCards);
            } else {
                this.closeOpenCards(openCards);
            }
        }
    }

    private markOpenCards(openCards: ICard[]): void {
        openCards.forEach((card: ICard): void => {
            card.isFindPair = true;
        });
        this.isCanOpen = true;
    }

    private closeOpenCards(openCards: ICard[]): void {
        setTimeout((): void => {
            openCards.forEach((card: ICard): void => {
                card.isOpen = false;
            });
            this.forceUpdate();
            this.isCanOpen = true;
        }, 800);
    }

    render (): React.JSX.Element {
        return <div className={'body'}>
            <div className={'body__card-wrap'}>
                {this.cards.map((card: ICard) => {
                    return (
                        <Card card={card} key={card.id} isCanOpen={this.isCanOpen} cardClicked={this.cardClicked.bind(this)}/>
                    );
                })}
            </div>
        </div>
    }
}

export default Body;
