import { serviceCardProps } from "@/types";
import { url } from "inspector";
import Image from "next/image";
import React from "react";

const ServiceCard = ({ text, image }: serviceCardProps) => {
  return (
    <div className="service-card">
      <Image
        src={image}
        fill
        objectFit="cover"
        alt="Image of service provided"
      />
      <div className="service-title">
        <span>{text}</span>
      </div>
    </div>
  );
};

export default ServiceCard;
