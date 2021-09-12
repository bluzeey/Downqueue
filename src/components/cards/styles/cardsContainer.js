import styled from "styled-components";

export const Container=styled.div
`
  display: flex;
  justify-content:center;
  align-items:center;
  font-family:"Source Sans Pro";
  @media (max-width:1000px) {
    flex-direction:column;
  }
`
export const Inner=styled.div`
  border: 1px solid #000000;
  max-width: 350px;
  max-height: 400px;
  margin:1em;
  `
export const Title = styled.h3`
  font-size: 1.875rem;
  line-height: 2.5rem;
  text-align: center;
  margin: .5rem 0;
  font-weight: 600;`

export const Paragraph=styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #68717a;
  margin: 1.5rem 1.25rem;`

export const Image=styled.img`
  width: 100%;
  max-height:200px;`

