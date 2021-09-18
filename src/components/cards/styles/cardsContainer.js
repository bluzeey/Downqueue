import styled from "styled-components";

export const Container=styled.div
`
  margin-top:5em;
  display: flex;
  justify-content:center;
  font-family:"Source Sans Pro";
  flex-direction:column;
`
export const Inner=styled.div`
   padding:1em;
   width:80%;
   margin:2em auto;
   border:1px solid black;
   border-radius:1%;
   background:rgba(1, 93, 231,0.7);
   max-width:750px;
  `
export const Title = styled.h3`
  font-size: 1.875rem;
  line-height: 2.5rem;
  text-align: left;
  margin: .5rem 0;
  font-weight: 600;
  color:white
   `

export const Paragraph=styled.p`
  font-size: 20px;
  line-height: 24px;
  color: #fff;
  margin: 1.5rem 1.25rem;`

export const Image=styled.img`
   max-width:600px
   `

