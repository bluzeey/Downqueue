import TopNavContainer from "./containers/topnav";
import HeroImgContainer from "./containers/heroimg";
import CardsContainer from "./containers/cardsContainer";
import PricingCardsContainer from "./containers/pricingCardsContainer";
import FooterContainer from "./containers/footer";

function Homepage(){
  return <>
         <TopNavContainer/>
         <HeroImgContainer/>
         <CardsContainer/>
         <FooterContainer/>
         </>;
}
export default Homepage;