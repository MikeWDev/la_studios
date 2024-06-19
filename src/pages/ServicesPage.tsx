import Linebreak from "@/components/Linebreak";
import ServiceCard from "@/components/ServiceCard";
import React from "react";

const ServicesPage = () => {
  return (
    <section>
      <div className="services container">
        <Linebreak />
        <div className="heading">
          <h1>services</h1>
        </div>
        <div className="services-con">
          <ServiceCard text="wedding" image="/services-first.jpg" />
          <ServiceCard text="Events" image="/services-second.jpg" />
          <ServiceCard text="Life style" image="/services-third.png" />
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
