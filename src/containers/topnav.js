import React from 'react';
import {Link} from 'react-router-dom';
import TopNav from '../components/topNav/';
export default function TopNavContainer(){
    return (
        <TopNav>
        <TopNav.Image src='/assets/images/logo.png' alt="logo"/>
        <TopNav.ListItem><TopNav.NavLink to="/">Home</TopNav.NavLink ></TopNav.ListItem>
        <TopNav.ListItem><TopNav.NavLink to="/contact">Contact</TopNav.NavLink ></TopNav.ListItem>
        <TopNav.ListItem><TopNav.NavLink to="/about">About</TopNav.NavLink></TopNav.ListItem>
        <TopNav.ListItem><TopNav.NavLink to="/login">Login</TopNav.NavLink></TopNav.ListItem>
        </TopNav>
    )
}