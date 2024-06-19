"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BestShotsImageCard from "@/components/BestShotsImageCard";
const BestShotsCarousell = () => {
  const setting = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <Slider {...setting}>
        <BestShotsImageCard />
        <BestShotsImageCard />
        <BestShotsImageCard />
      </Slider>
    </>
  );
};

export default BestShotsCarousell;
