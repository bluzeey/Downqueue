import styled from "styled-components";

export const Container=styled.div`
  font-family: Source Sans Pro;
  background: #1e2833;
  display:flex;
  flex-direction:column;
  `

export const Paragraph=styled.p`
  color: aliceblue;
  margin-bottom: 0;
  text-align:center;
  `

export const Inner=styled.p`
  display: flex;
  justify-content: space-around;
  color:#fff;
  @media(max-width:700px){
    flex-direction:column;
    align-items:center;
  }
`

