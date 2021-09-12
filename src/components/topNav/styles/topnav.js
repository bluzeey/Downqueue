import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const Container=styled.div`
  display: flex;
  border: 1px solid white;
  padding-left: 1em;
  background-color: rgba(0,0,0,0.05);
  justify-content:space-around;
  align-items:center;
  @media(max-width:1000px){
      flex-direction:column;
  }`

export const Image=styled.img`
  max-height: 100px;
  align-self:center;`

export const List=styled.ul``

export const ListItem=styled.li`
  text-decoration: none;
  font-family: inherit;
  font-weight: bold;
  font-size:1.3rem;
  display: inline-block;
  @media(max-width:1000px){
      align-self:center;
      margin:1.5em 0;
  }
  `
export const NavLink=styled(Link)`
  color: #015de7;
  padding:.5em 2.5em;
  font-size: 1.5rem;
  text-decoration: none;
  &:hover{
      background:#015de7;
      color:white
  }`;

