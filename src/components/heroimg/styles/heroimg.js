import styled from "styled-components";

export const Container=styled.div
`font-family: "Source Sans Pro";
 display:flex;
 column-gap: 10em;
 align-items:center;
 justify-content:center;
 @media (max-width:1000px) {
   flex-direction:column;
 }
`
export const Title =styled.h1`
  font-weight: 700;
  font-size: 5.5rem;
  align-self:flex-start;
  `;

export const Paragraph=styled.p`
  font-size: 2.25rem;
  line-height: 2.8rem;
  align-self:flex-start`

export const Image=styled.img`
  max-width: 600px;
  width:100%;
  border-radius:3px;
  @media (max-width:1000px) {
   width:80%;
 }
  `

export const Button=styled.button`
  background: #015de7;
  color: white;
  border-radius: 4px;
  border:none;
  padding: 1em;
  font-family:inherit;
  font-size: 1.2rem;
  font-weight: bold;
  align-self:flex-end;`

export const Inner=styled.div`
    display: flex; 
    flex-direction:column;
    max-height:100vh;
    max-width:600px;
    margin-left:2em;
    `