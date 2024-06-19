"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReviewCard from "./ReviewCard";
const ReviewCarousell = () => {
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
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </Slider>
    </>
  );
};

export default ReviewCarousell;