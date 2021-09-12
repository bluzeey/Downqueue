import React from 'react';
import { Title, Paragraph,Container,Image,Inner } from './styles/cardsContainer';

export default function Cards({children,...restProps}){
  return <Container {...restProps}>
          {children}
         </Container>
}

Cards.Title = function CardsTitle({children,...restProps}){
  return <Title {...restProps}>{children}</Title>
}

Cards.Paragraph = function CardsParagraph({children,...restProps}){
  return <Paragraph {...restProps}>{children}</Paragraph>
}

Cards.Image = function CardsImage({children,...restProps}){
  return <Image {...restProps}/>
}
Cards.Inner=function CardsInner({children,...restProps}){
  return <Inner {...restProps}>{children}</Inner>
}