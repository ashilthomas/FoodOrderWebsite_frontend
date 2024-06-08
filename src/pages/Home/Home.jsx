import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import ExploreItems from "../../components/ExploreItems/ExploreItems";
import Restaurants from "../../components/Restaurants/Restaurants";
import Offers from "../../components/Offers/Offers";
import Appdownloade from "../../components/Appdownload/Appdownloade";
import Footer from "../../components/Footer/Footer";
import Coupons from "../../components/Coupons/Coupons";


function Home() {
   

  return (
    <div>
    
    
      <Hero/>
      <ExploreItems />
      <Restaurants />
      <Offers />
      <Appdownloade />
      <Footer />
     
     
     
    </div>
  );
}

export default Home;
