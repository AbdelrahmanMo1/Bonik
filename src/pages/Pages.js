import React from "react";
import Home from "../components/mainpage/Home";
import FlashDeals from "../components/flash/FlashDeals";
import TopCategories from "../components/topCategories/TopCategories";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Discount from "../components/discount/Discount";
import Shop from "../components/shop/Shop";
import Banner from "../components/banner/Banner";
import Service from "../components/service/Service";

const Pages = ({ productItems, cartItem, addToCard }) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCard={addToCard} />
      <TopCategories />
      <NewArrivals />
      <Discount />
      <Shop addToCard={addToCard} />
      <Banner />
      <Service />
    </>
  );
};

export default Pages;
