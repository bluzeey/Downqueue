import React from 'react';
import {Link} from 'react-router-dom';
import TopNav from '../components/topNav/';
export default function TopNavContainer(){
    return (
        <TopNav>
        <TopNav.Image src='/assets/images/logo.png' alt="logo"/>
        <TopNav.ListItem><TopNav.NavLink to="/">HOME</TopNav.NavLink ></TopNav.ListItem>
        <TopNav.ListItem><TopNav.NavLink to="/contact">CONTACT</TopNav.NavLink ></TopNav.ListItem>
        <TopNav.ListItem><TopNav.NavLink to="/about">ABOUT</TopNav.NavLink></TopNav.ListItem>
        <TopNav.ListItem><TopNav.NavLink to="/login">LOGIN</TopNav.NavLink></TopNav.ListItem>
        </TopNav>
    )
}