import React from "react";
import TopNav from "./components/topNav"
import Footer from "./components/footer"
import HeroImg from "./components/heroimg";
import Cards from "./components/cards";


function Homepage(){
  return <>
         <TopNav/>
         <HeroImg/>
         <Cards/>
         <Footer/>
         </>;
}
export default Homepage;