import CarousellArrows from "@/components/CarousellArrows";
import Linebreak from "@/components/Linebreak";
import React from "react";

import BestShotsCarousell from "@/components/BestShotsCarousell";

const BestShotsPage = () => {
  return (
    <section>
      <div className="best-shots container">
        <Linebreak />
        <div className="heading-con">
          <h1>best shoots</h1>
          <p>Every picture tells a story</p>
        </div>
        <div className="slider-container">
          <BestShotsCarousell />
          <CarousellArrows />
        </div>
      </div>
    </section>
  );
};

export default BestShotsPage;
