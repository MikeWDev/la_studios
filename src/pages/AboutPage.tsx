import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <section>
      <div className="container about">
        <div className="sentence">
          <h3>
            Celebrating Life's Journey Through the Lens: Capturing Moments,
            Creating Memories, and Preserving Emotions with Artistic Precision
          </h3>
        </div>
        <span className="linebreak"></span>
        <div className="content-container">
          <div className="text-container">
            <h2>Welcome</h2>
            <p>
              My name is Florian and I am a wedding photograpther living in
              London. Each and every wedding has it’s own sroty, a story that
              will be captured i a natural vreative way
            </p>
          </div>
          <div className="img-container">
            <Image
              src="/la-itself.jpg"
              alt="Image of the potographer"
              width={350}
              height={480}
            />
          </div>
        </div>
        <div className="button-con">
          <Button text="about me" type="dark" />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
