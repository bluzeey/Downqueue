import styled from "styled-components";

export const Container=styled.div`
  display: flex;
  margin-top: 4em;
  align-items:center;
  justify-content:center;
  @media(max-width:1000px){
      flex-direction:column;
  }`

export const Inner=styled.div`
  border: 1px solid #000000;
  display:flex;
  flex-direction:column;
  margin: 1em 2em;
  width: 400px;
  background: #c2e9f5;`

export const Title=styled.h3`
  font-size: 64px;
  line-height: 75px;
  text-align: center;
  color: #2d3748;`

export const Button=styled.button`
  padding: 1.2em;
  width: 100%;
  font-size:1.25rem;
  line-height: 18.75px;
  color: #2d3748;
  background: #fc998f;
  border: 1px solid;
  font-weight: bold;
  font-family:inherit;`

export const Paragraph=styled.p`
  font-size: 1rem;
  line-height: 1.2px;
  text-align: center;
  padding: 10px;`

export const ListItem=styled.li`
  &:before{
  content: "•"; 
  display: inline-block;
  font-weight: bold;
  margin: 1.5rem 0;
  color: #fc998f;
  font-size: 170%;
  padding: 0 20px}`

export const List=styled.ul`
 list-style: none;`

