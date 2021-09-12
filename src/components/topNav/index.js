import React from 'react';
import { Container, Image , List , NavLink, ListItem} from './styles/topnav';

export default function TopNav({children,...restProps}){
    return <Container {...restProps}>{children}</Container>
}

TopNav.List= function TopNavList({children,...restProps}){
  return <List {...restProps}>{children}</List>
}
TopNav.Image= function TopNavImage({children,...restProps}){
  return <Image {...restProps}/>
}
TopNav.NavLink= function TopNavLink({children,...restProps}){
  return <NavLink {...restProps}>{children}</NavLink>
}
TopNav.ListItem= function TopNavListItem({children,...restProps}){
  return <ListItem {...restProps}>{children}</ListItem>
}
