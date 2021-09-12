import React from "react";
import PCData from "../data/pricingData.json";
import PricingCards from "../components/pricingCards";

function PricingCardsContainer(){
    return(
        <PricingCards>
            {PCData.map(Card=>(
            <PricingCards.Inner>
            <PricingCards.Title>{Card.title}</PricingCards.Title>
            <PricingCards.Paragraph>{Card.text}</PricingCards.Paragraph>
             <PricingCards.List>
                <PricingCards.ListItem>{Card.list.listitem1}</PricingCards.ListItem>
                <PricingCards.ListItem>{Card.list.listitem2}</PricingCards.ListItem>
                <PricingCards.ListItem>{Card.list.listitem3}</PricingCards.ListItem>
            </PricingCards.List>
            <PricingCards.Button>Get started today</PricingCards.Button>
            </PricingCards.Inner>))}
        </PricingCards>
    )
}
export default PricingCardsContainer