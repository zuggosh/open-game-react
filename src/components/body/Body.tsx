import React from "react"
import Card from './card/Card';
import './body.scss';
import {useSelector} from "react-redux";
import {IConfigureStore} from "../../redux/inded";

export interface ICard {
    number: number;
    isOpen: boolean;
    isFindPair: boolean;
    id: string;
}

function Body(props: any) {
    const cards2 = useSelector((state: IConfigureStore) =>  state.cardReducer);

    return (
        <div className={'body'}>
            <div className={'body__card-wrap'}>
                {cards2.map((card: ICard) => {
                    return (
                        <Card card={card} key={card.id}/>
                    );
                })}
            </div>
        </div>
    )
}

export default Body;
