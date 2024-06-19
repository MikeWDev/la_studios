import Image from "next/image";
import React from "react";

const BestShotsImageCard = () => {
  return (
    <div className="bs-card">
      <div className="date-con">
        <span></span>
        <p>12.02.23</p>
      </div>
      <div className="img-con">
        <Image alt="Best shot" src="/bs-first.jpg" fill />;
      </div>
    </div>
  );
};

export default BestShotsImageCard;
