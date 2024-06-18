import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import React from "react";

const HomePage = () => {
  return (
    <>
      <section className="home-section">
        <div className="overlay"></div>
        <div className="container">
          <Navbar />
          <div className="content-container">
            <div className="slogans-con">
              <h1>lanre ayilegbe</h1>
              <span>studios</span>
              <div className="btn-con">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
