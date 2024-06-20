import Linebreak from "@/components/Linebreak";
import ReviewCarousell from "@/components/ReviewCarousell";
import TextLine from "@/components/TextLine";
import React from "react";

const ReviewsPage = () => {
  return (
    <section>
      <div className="container reviews">
        <div className="heading">
          <TextLine />
          <h2> my clients say</h2>
        </div>
        <div className="reviews-con">
          <ReviewCarousell />
        </div>
        <Linebreak />
      </div>
    </section>
  );
};

export default ReviewsPage;
