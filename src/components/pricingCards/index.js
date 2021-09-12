import React from 'react';
import 
{ Container,
    Title , 
    Button,
    List , 
    ListItem,
    Inner,
    Paragraph,
   } from './styles/pricingCardsContainer';

export default function PricingCards({children,...restProps}){
  return <Container {...restProps}>{children}</Container>
}
PricingCards.Inner= function PricingCardsInner({children,...restProps}){
  return <Inner {...restProps}>{children}</Inner>
}
PricingCards.Title= function PricingCardsTitle({children,...restProps}){
  return <Title {...restProps}>{children}</Title>
}
PricingCards.Paragraph= function PricingCardsParagraph({children,...restProps}){
  return <Paragraph {...restProps}>{children}</Paragraph>
}
PricingCards.Button= function PricingCardsButton({children,...restProps}){
  return <Button {...restProps}>{children}</Button>
}
PricingCards.List= function PricingCardsList({children,...restProps}){
  return <List {...restProps}>{children}</List>
}
PricingCards.ListItem=function PricingCardsListItem({children,...restProps}){
  return <ListItem {...restProps}>{children}</ListItem>
}
