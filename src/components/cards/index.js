import React from 'react';
import CardsData from "../../data/cardsData.json"
import "./cards.scss"

export default function Cards(){
    return(
        <div className="cards-Container">
        {CardsData.map((Card)=>(
            <div className={`cards-Inner ${Card.style}`}>
            <h3 className="cards-Title">{Card.title}</h3>
            <div className="cards-Content">
            <img className="cards-img" src={Card.img} alt="Schedule"/>
            <p className="cards-Paragraph">{Card.text}</p>
            </div>
            </div>))}
        </div>
    )
}
