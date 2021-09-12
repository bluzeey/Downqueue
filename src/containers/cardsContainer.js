import React from 'react';
import Cards from '../components/cards/';
import CardsData from "../data/cardsData";

export default function CardsContainer(){
    return(
        <Cards>
        {CardsData.map((Card)=>(
            <Cards.Inner>
            <Cards.Title>{Card.title}</Cards.Title>
            <Cards.Image className="cards-img" src={Card.img} alt="Schedule"/>
            <Cards.Paragraph>{Card.text}</Cards.Paragraph>
            </Cards.Inner>))}
        </Cards>
    )
}


