import Image from "next/image";
import React from "react";

const ReviewCard = () => {
  return (
    <div className="review-card">
      <Image
        src={"/review-first.jpg"}
        height={250}
        width={250}
        alt="Image of satisfied client"
      />
      <div className="client-name">
        <span></span>
        <p>Aleksandra Paslawska</p>
      </div>
      <div className="client-review">
        <p>
          Lorem ipsum dolor sit amet. Quo ullam rerum quo dolorem iste aut
          maxime ...
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
