"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BestShotsImageCard from "@/components/BestShotsImageCard";
const BestShotsCarousell = () => {
  var setting = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
